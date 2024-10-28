import csv
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import nltk
import logging

nltk.download('averaged_perceptron_tagger', quiet=True)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

bot = ChatBot(
    'EduGuide',
    logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'default_response': 'Sorry, I could not understand your question. Please try again.',
            'maximum_similarity_threshold': 0.90
        }
    ]
)

trainer = ListTrainer(bot)

def load_training_data(filename="chatbot.csv"):
    """Load conversation pairs from a CSV file."""
    training_data = []
    with open(filename, "r") as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip the header row
        for row in csv_reader:
            if len(row) == 2:  # Ensure each row has exactly two columns
                training_data.append((row[0], row[1]))
    return training_data

training_data = load_training_data()
for input_text, response_text in training_data:
    trainer.train([input_text, response_text])

def get_bot_response(user_text):
    """Generate a response from the chatbot based on user input."""
    bot_response = bot.get_response(user_text)
    if float(bot_response.confidence) > 0.5:
        return str(bot_response)
    else:
        # Low-confidence default response
        return ("Sorry, I am not sure what you mean. 😊 Here’s what I can help with:<br>"
                "1. Admission Documents<br>2. FAQs<br>3. Scholarships<br>4. Top Colleges<br>"
                "5. Engineering Colleges by CET Percentile<br>6. Forms<br>0. Main Query<br>")