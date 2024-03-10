// Show card on clicking on word from list
document.addEventListener("DOMContentLoaded", function () {
    const wordLinks = document.querySelectorAll(".word-link");
    const wordCards = document.querySelectorAll(".word-card");

    wordLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedWord = link.getAttribute("data-word");
            toggleWordCards(selectedWord);

            // Remove the "selected" class from all links
            wordLinks.forEach(function (wordLink) {
                wordLink.classList.remove("selected");
            });

            // Add the "selected" class to the clicked link
            link.classList.add("selected");
        });
    });

    function toggleWordCards(selectedWord) {
        wordCards.forEach(function (card) {
            const cardWord = card.getAttribute("data-word");
            if (cardWord === selectedWord) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});

// Script to send word to python route for tts
async function speak(word) {
    try {
        const response = await fetch('/speak', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        });

        const result = await response.json();
        if (result.success) {
            // Play the audio file
            const audio = new Audio(`/static/audio/${word.toLowerCase().replace(' ', '_')}_speech.mp3`);
            audio.play();
        } else {
            console.error('Failed to generate speech.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


// Words button navigation
var currentIndex = 0;

function showNextWord() {
    showWord(currentIndex + 1);
}

function showPreviousWord() {
    showWord(currentIndex - 1);
}

function showWord(index) {
    var wordLinks = document.querySelectorAll('.word-link');
    var wordCards = document.querySelectorAll('.word-card');

    if (index < 0) {
        index = wordCards.length - 1;
    } else if (index >= wordCards.length) {
        index = 0;
    }

    wordCards.forEach(function(card, i) {
        card.style.display = i === index ? 'block' : 'none';
    });

    // Remove 'selected' class from all word links
    wordLinks.forEach(function(link) {
        link.classList.remove('selected');
    });

    // Add 'selected' class to the clicked word link
    wordLinks[index].classList.add('selected');

    currentIndex = index;

    // Scroll the selected word link into view
    wordLinks[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });
}


document.addEventListener('DOMContentLoaded', function () {
    var wordLinks = document.querySelectorAll('.word-link');

    wordLinks.forEach(function (link, index) {
        link.addEventListener('click', function () {
            showWord(index);
        });
    });

    // Show the first word initially
    showWord(currentIndex);
});

// Navigation using arrow keys
document.addEventListener('DOMContentLoaded', function () {
    var wordLinks = document.querySelectorAll('.word-link');

    wordLinks.forEach(function (link, index) {
        link.addEventListener('click', function () {
            showWord(index);
        });
    });

    // Show the first word initially
    showWord(currentIndex);

    // Add event listener for right arrow key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight' || event.key === "ArrowDown") {
            event.preventDefault();
            showNextWord();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' || event.key === "ArrowUp") {
            event.preventDefault();
            showPreviousWord();
        }
    });
});
// Button navigation end