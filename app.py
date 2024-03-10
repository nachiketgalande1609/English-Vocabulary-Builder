from flask import Flask, render_template, request, jsonify
import pyttsx3
import os
import json
import random

app = Flask(__name__)

# Home page route
@app.route('/')
def home():
    with open('words.json', 'r', encoding='utf-8') as file:
        data_dict = json.load(file)
    return render_template('index.html', data_dict=data_dict)

@app.route('/800_words')
def additional():
    with open('words3.json', 'r', encoding='utf-8') as file:
        data_dict = json.load(file)
    return render_template('additional.html', data_dict=data_dict)

# Route for text-to-speech
@app.route('/speak', methods=['POST'])
def speak():
    data = request.get_json()
    word = data.get('word', '')
    engine = pyttsx3.init()
        
    rate = engine.getProperty('rate')
    engine.setProperty('rate', 150)

    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id)

        # Specify the correct path for saving the audio file
    audio_folder = 'static/audio'
    os.makedirs(audio_folder, exist_ok=True)
    audio_path = os.path.join(audio_folder, f'{word}_speech.mp3')

    engine.save_to_file(word, audio_path)
    engine.runAndWait()

    return jsonify(success=True, audio_path=audio_path)

# Route for filtering data
@app.route('/333_words/<letter>')
def filter_by_letter_333(letter):
    with open('words.json', 'r', encoding='utf-8') as file:
        data_dict = json.load(file)
    
    filtered_words = [word for word in data_dict if word['Word'].lower().startswith(letter)]
    
    return render_template('index.html', data_dict=filtered_words)

# Route for filtering data
@app.route('/800_words/<letter>')
def filter_by_letter_800(letter):
    with open('words3.json', 'r', encoding='utf-8') as file:
        data_dict = json.load(file)
    
    filtered_words = [word for word in data_dict if word['Word'].lower().startswith(letter)]
    
    return render_template('additional.html', data_dict=filtered_words)

# Route for the quiz
@app.route('/quiz')
def quiz():
    with open('words.json', 'r', encoding='utf-8') as file:
        data_dict = json.load(file)

    # Randomly select a word for the quiz
    quiz_word = random.choice(data_dict)
    
    # Extract details for the quiz
    question = quiz_word['Meaning']
    correct_answer = quiz_word['Word']
    
    # Extract three incorrect options from the dataset
    incorrect_options = [word['Word'] for word in data_dict if word['Word'] != correct_answer]

    # Check if there are enough incorrect options
    if len(incorrect_options) >= 3:
        # Include the correct answer and shuffle all options
        choices = [correct_answer] + random.sample(incorrect_options, k=3)
        random.shuffle(choices)
    else:
        # Handle the case where there are not enough incorrect options
        choices = [correct_answer] + incorrect_options

    return render_template('quiz.html', question=question, choices=choices, correct_answer=correct_answer)


