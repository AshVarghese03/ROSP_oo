import io
import tempfile
import google_auth
import flask
from flask import render_template, request, redirect, url_for, send_file, session
from googleapiclient.http import MediaIoBaseDownload, MediaIoBaseUpload
import googleapiclient.discovery
from google_auth import build_credentials
from werkzeug.utils import secure_filename

app = flask.Blueprint('google_drive', __name__)

# Function to build Google Drive API v3
def build_drive_api_v3():
    credentials = build_credentials()
    return googleapiclient.discovery.build('drive', 'v3', credentials=credentials).files()

# Route for listing files after user login
@app.route('/login1')
def login1():
    credentials = build_credentials()  # Replace with your function to get user credentials
    drive_api = build_drive_api_v3()

    files = []
    page_token = None
    try:
        while True:
            response = drive_api.list(q="trashed = false",
                                       fields="nextPageToken, files(id, name)").execute()
            files.extend(response.get('files', []))
            page_token = response.get('nextPageToken', None)
            if page_token is None:
                break
    except Exception as e:
        print(f"Error listing files: {e}")

    return render_template('list.html', files=files)

# Function to save/upload an image to Google Drive
def save_image(file_name, mime_type, file_data):
    drive_api = build_drive_api_v3()

    try:
        generate_ids_result = drive_api.generateIds(count=1).execute()
        file_id = generate_ids_result['ids'][0]

        body = {
            'id': file_id,
            'name': file_name,
            'mimeType': mime_type,
        }

        media_body = MediaIoBaseUpload(file_data, mimetype=mime_type, resumable=True)

        drive_api.create(body=body,
                         media_body=media_body,
                         fields='id,name,mimeType,createdTime,modifiedTime').execute()

        return file_id
    except Exception as e:
        print(f"Error saving image: {e}")
        return None

# Route to handle file upload
@app.route('/gdrive/upload', methods=['POST'])
def upload_file():
    if 'file' in request.files and 'file_name' in request.form:
        file = request.files['file']
        file_name = request.form['file_name']
        if file:
            filename = secure_filename(file_name)

            # Create a temporary file
            with tempfile.TemporaryFile(mode='w+b') as fp:
                fp.write(file.read())
                fp.seek(0)
                mime_type = file.mimetype
                file_id = save_image(filename, mime_type, fp)

                if file_id:
                    flask.flash('File uploaded successfully!', 'success')
                else:
                    flask.flash('Failed to upload file.', 'error')

            return redirect(url_for('google_drive.list_files_route'))
    flask.flash('No file selected or invalid input.', 'error')
    return redirect('/')

# Function to list files from Google Drive
def list_files():
    drive_api = build_drive_api_v3()
    files = []
    try:
        files_response = drive_api.list(q="trashed = false and modifiedTime > '2022-01-01T00:00:00'",
                                         fields="files(id, name, mimeType, createdTime)").execute()
        files = files_response.get('files', [])
    except Exception as e:
        print(f"Error fetching files: {e}")

    return files

# Route to list files
@app.route('/gdrive/list', methods=['GET'])
def list_files_route():
    files = list_files()
    return render_template('list.html', files=files)

@app.route('/gdrive/files', methods=['GET'])
def get_files():
    files = list_files()  # Get the list of files from Google Drive
    return flask.jsonify(files)

# Route to view/download a file
@app.route('/gdrive/view/<file_id>', methods=['GET'])
def view_file(file_id):
    drive_api = build_drive_api_v3()

    try:
        # Fetch file metadata (name and mimeType)
        metadata = drive_api.get(fileId=file_id, fields="name,mimeType").execute()
        
        if not metadata:
            flask.flash("File not found.", 'error')
            return redirect(url_for('google_drive.list_files_route'))

        # Get the file content
        request = drive_api.get_media(fileId=file_id)
        fh = io.BytesIO()
        downloader = MediaIoBaseDownload(fh, request)

        done = False
        while not done:
            status, done = downloader.next_chunk()
            print(f"Download progress: {int(status.progress() * 100)}%")  # Log download progress

        # Move back to the start of the file handle for reading
        fh.seek(0)

        # Return the file to the user
        return send_file(
            fh,
            as_attachment=False,
            download_name=metadata['name'],  # Use download_name for Flask 2.0+
            mimetype=metadata['mimeType']
        )
    except Exception as e:
        print(f"Error viewing file: {e}")  # Log the error for debugging
        flask.flash("An error occurred while trying to view the file.", 'error')
        return redirect(url_for('google_drive.list_files_route'))

# Route to delete a file
@app.route('/gdrive/delete/<file_id>', methods=['POST'])
def delete_file(file_id):
    drive_api = build_drive_api_v3()
    try:
        drive_api.delete(fileId=file_id).execute()
        flask.flash("File deleted successfully!", 'success')
    except Exception as e:
        print(f"Error deleting file: {e}")
        flask.flash("Failed to delete file.", 'error')
    return redirect(url_for('google_drive.list_files_route'))
