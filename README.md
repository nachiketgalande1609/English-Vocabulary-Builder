# GRE Vocabulary Learning App

This Flask based platform is designed to assist students, particularly those preparing for the GRE/other competitive exams, in learning and memorizing vocabulary words. The app provides a user-friendly interface to explore and practice GRE words from Barron's 333 and Barron's 800 lists. Additionally, it offers a quiz feature to test your knowledge.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Routes](#routes)

## Introduction

Preparing for the GRE exam involves mastering an extensive vocabulary. Reading from traditional documents can be challenging, and to address this, the GRE Vocabulary Learning App was created. The application simplifies the process of memorizing words by providing interactive features and detailed information about each word.

## Features

1. **Home Page**
   - Displays words from the Barron's 333 list.
   - Users can filter words by starting letter.

2. **Additional Words Page**
   - Presents words from the Barron's 800 list.
   - Allows filtering by starting letter.

3. **Text-to-Speech**
   - Converts selected words into speech.
   - Provides an audio file for pronunciation practice.

4. **Quiz**
   - Tests users' knowledge with a random word from the Barron's 333 list.
   - Multiple-choice format with feedback on correct answers.

## Setup

### Prerequisites

- Python
- virtualenv

### Setting up a Virtual Environment

It is recommended to create and activate a virtual environment to manage dependencies. Follow these steps:

1. Open a terminal or command prompt in the project directory.

2. Create a virtual environment (replace `venv` with your preferred name):

    ```bash
    virtualenv venv
    ```

3. Activate the virtual environment:

    - On Windows:

        ```bash
        .\venv\Scripts\activate
        ```

    - On macOS and Linux:

        ```bash
        source venv/bin/activate
        ```

### Installing Dependencies

Install the required dependencies using the following command:

```bash
pip install -r requirements.txt
```

## Running the Application

Ensure that the virtual environment is activated before running the application.

```bash
python app.py
```

Visit [http://127.0.0.1:5000/](http://127.0.0.1:5000/) in your web browser to access the application.

## Screenshots

### 333 Words Page

<img  src="https://github.com/nachiketgalande1609/English-Vocabulary-Builder/blob/main/screenshots/home_mac.png?raw=true"  alt="333 words page">

### 800 Words Page

<img  src="https://github.com/nachiketgalande1609/English-Vocabulary-Builder/blob/main/screenshots/800_mac.png?raw=true"  alt="333 words page">

### Quiz Page

<img  src="https://github.com/nachiketgalande1609/English-Vocabulary-Builder/blob/main/screenshots/quiz_mac.png?raw=true"  alt="333 words page">

## Usage

1. Access the home page at [http://localhost:5000/](http://localhost:5000/) to explore Barron's 333 words.

2. Navigate to [http://localhost:5000/800_words](http://localhost:5000/800_words) for Barron's 800 words.

3. Use the quiz feature at [http://localhost:5000/quiz](http://localhost:5000/quiz) to test your knowledge.

4. Utilize the text-to-speech feature by making a POST request to [http://localhost:5000/speak](http://localhost:5000/speak) with the selected word.

## Routes

- **Home Page**: [http://localhost:5000/](http://localhost:5000/)
- **Additional Words Page**: [http://localhost:5000/800_words](http://localhost:5000/800_words)
- **Text-to-Speech Endpoint**: [http://localhost:5000/speak](http://localhost:5000/speak) (POST request)
- **Quiz Page**: [http://localhost:5000/quiz](http://localhost:5000/quiz)
