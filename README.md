GRE Vocabulary Learning App
This Flask application is designed to assist users, particularly those preparing for the GRE exam, in learning and memorizing vocabulary words. The app provides a user-friendly interface to explore and practice GRE words from Barron's 333 and Barron's 800 lists. Additionally, it offers a quiz feature to test your knowledge.

Table of Contents
Introduction
Features
Setup
Usage
Routes
Contributing
License
Introduction
Preparing for the GRE exam involves mastering an extensive vocabulary. Reading from traditional documents can be challenging, and to address this, the GRE Vocabulary Learning App was created. The application simplifies the process of memorizing words by providing interactive features and detailed information about each word.

Features
Home Page

Displays words from the Barron's 333 list.
Users can filter words by starting letter.
Additional Words Page

Presents words from the Barron's 800 list.
Allows filtering by starting letter.
Text-to-Speech

Converts selected words into speech.
Provides an audio file for pronunciation practice.
Quiz

Tests users' knowledge with a random word from the Barron's 333 list.
Multiple-choice format with feedback on correct answers.
Setup
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run the application:

bash
Copy code
python app.py
Usage
Access the home page at http://localhost:5000/ to explore Barron's 333 words.

Navigate to http://localhost:5000/800_words for Barron's 800 words.

Use the quiz feature at http://localhost:5000/quiz to test your knowledge.

Utilize the text-to-speech feature by making a POST request to http://localhost:5000/speak with the selected word.

Routes
Home Page: http://localhost:5000/
Additional Words Page: http://localhost:5000/800_words
Text-to-Speech Endpoint: http://localhost:5000/speak (POST request)
Quiz Page: http://localhost:5000/quiz
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.
