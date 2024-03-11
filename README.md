# English Vocabulary Builder

This repository contains a simple Flask web application for a word quiz. The application allows users to explore a list of words, listen to their pronunciation, and participate in a quiz to test their knowledge.

## Features

- **Home Page**: Displays a list of words along with their meanings.
- **Additional Words Page**: Provides an extended list of words.
- **Text-to-Speech**: Utilizes the `pyttsx3` library to convert text to speech for selected words.
- **Filtering**: Allows users to filter words based on the starting letter.
- **Quiz**: Offers a quiz feature where users can test their knowledge by answering questions about the meanings of words.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/word-quiz-app.git
   cd word-quiz-app
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:

   ```bash
   python app.py
   ```

   Access the application by navigating to `http://localhost:5000` in your web browser.

## Usage

- Visit the home page to explore a list of words and their meanings.
- Click on the "Additional Words" link to access an extended list of words.
- Use the filter options to narrow down the list of words based on the starting letter.
- Click on the "Listen" button to hear the pronunciation of a selected word.
- Participate in the quiz by navigating to the "Quiz" page.

## Dependencies

- Flask
- pyttsx3

## File Structure

- `app.py`: The main Flask application file.
- `templates/`: Contains HTML templates for different pages.
- `static/audio/`: Stores generated audio files for text-to-speech.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Ensure that your code follows the PEP 8 style guide.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
