from flask import Flask, flash, request, render_template,jsonify, redirect, url_for, session
from pymongo import MongoClient
import functools
import json
import os
import re
import time
import nltk
import google_auth
import google_drive
from twilio.twiml.messaging_response import MessagingResponse
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer
from bson import ObjectId

# Download required NLTK resources
nltk.download('averaged_perceptron_tagger')

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("my_secret_key", default='my_secret_key')


app.register_blueprint(google_auth.app)

app.register_blueprint(google_drive.app)

# Set a secret key for the Flask application
app.secret_key = 'my_secret_key'

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Change if using a different URI
db = client['app']  # Use the 'app' database
users_collection = db['users']  # Use the 'users' collection
colleges_collection = db['colleges']

@app.route('/')
def show_login():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm_password']  # Get confirm password

        # Check if the username already exists in the database
        existing_user = users_collection.find_one({"username": username})

        # Validate the user's information
        if existing_user:
            error = "Username already exists. Please choose another one."
            return render_template('register.html', error=error)
        elif not name or not name.isalpha():
            error = "Please enter a valid name containing only alphabets."
            return render_template('register.html', error=error)
        elif password != confirm_password:
            error = "Passwords do not match. Please try again."
            return render_template('register.html', error=error)
        else:
            # Insert the new user into the database
            users_collection.insert_one({"name": name, "username": username, "password": password})
            return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Validate the input fields
        if not username:
            error = 'Username field is required.'
            return render_template('login.html', error=error)
        if not password:
            error = 'Password field is required.'
            return render_template('login.html', error=error)
        if not re.match(r'^[\w.@+-]+$', username):
            error = 'Username contains invalid characters.'
            return render_template('login.html', error=error)

        # Check if the username and password match any entries in the database
        user = users_collection.find_one({"username": username, "password": password})

        if user:
            # Convert ObjectId to string before storing in session
            user['_id'] = str(user['_id'])
            # Store the user's information in a session variable
            session['user'] = user
            return redirect(url_for('dashboard'))
        else:
            error = 'Invalid login credentials'
            return render_template('login.html', error=error)

    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'user' in session:
        user = session['user']
        name = user['name']  # Access name from the user document
        
        # Display the dashboard for the logged-in user with their name
        return render_template('dashboard.html', name=name)
    else:
        return redirect(url_for('login'))

@app.route('/chatbot')
def chatbot():
    return render_template('chatbot.html')

@app.route('/calendar')
def calendar():
    return render_template('calendar.html')

@app.route('/colleges')
def colleges_route():
    # This will render the college.html template
    return render_template('college.html')

@app.route('/api/colleges')
def colleges_api_route():
    # This will return the JSON data
    colleges_data = list(colleges_collection.find({}, {'_id': 0}))  # exclude '_id'
    return jsonify(colleges_data)

@app.route('/api/dates')
def dates_api_route():
    # Fetch event data from the 'dates' collection
    events_data = list(db.dates.find({}, {'_id': 0}))  # Exclude '_id' from the output
    return jsonify(events_data)





# Initialize ChatBot
bot = ChatBot('EduGuide')
trainer = ListTrainer(bot)

# Create a ChatterBotCorpusTrainer and train it with the corpus data
corpus_trainer = ChatterBotCorpusTrainer(bot)
corpus_trainer.train('chatterbot.corpus.english.greetings')

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    bot_response = bot.get_response(userText)
    if float(bot_response.confidence) > 0.5:
        return str(bot_response)
    else:
        return ("Sorry, I am not sure what you mean. Go ahead and write the number of any query. "
                "😃✨ <br> 1. List of important documents you will be needing to complete your admission process.<br>"
                "2. Frequently asked questions regarding admission <br>"
                "3. Scholarship related info <br>"
                "4. Top Colleges <br>"
                "5. Engineering Colleges as per your CET Percentile <br>"
                "6. Forms <br>"
                "0. Press 0 for the main Query <br>")

@app.route('/api')
def api():
    # Your Google Drive API logic would go here.
    return render_template('login2.html', login_url='/google/login')

@app.route('/bot', methods=['POST'])
def bot_response():
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()

    if 'link' in incoming_msg:
        resp.message("Here is a link to the website: <a href='https://www.example.com'>https://www.example.com</a>")
    else:
        resp.message("I didn't understand your message. Please try again.")

    return str(resp)

@app.route('/forgot_password', methods=['GET', 'POST'])
def forgot_password():
    if request.method == 'POST':
        # Handle the forgot password logic here
        pass
    return render_template('forgot_password.html')  # Create this template

@app.route('/list')
def mylist():
    # Assuming user_info is a dictionary that contains user information
    user_info = session.get('user_info')  # or however you store the user info
    if not user_info:
        return redirect(url_for('login'))  # Redirect to login if user info is missing
    return render_template('listnew.html', user_info=user_info)


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
