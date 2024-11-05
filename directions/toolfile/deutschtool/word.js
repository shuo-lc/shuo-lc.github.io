// script.js
let words = ["apple", "banana", "cherry", "date", "elderberry"];
let currentWordIndex = 0;
let correctAnswers = 0;

function loadWord() {
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.textContent = words[currentWordIndex];
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const correctAnswer = words[currentWordIndex].toLowerCase();
    if (userInput === correctAnswer) {
        correctAnswers++;
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer is ' + correctAnswer);
    }
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        alert('Quiz completed! You got ' + correctAnswers + ' out of ' + words.length + ' correct.');
        currentWordIndex = 0; // Reset for next quiz
    }
    loadWord();
    document.getElementById('user-input').value = ''; // Clear input
    updateProgress();
}

function updateProgress() {
    const progressDisplay = document.getElementById('progress');
    progressDisplay.textContent = '进度：' + (currentWordIndex + 1) + '/' + words.length;
}

window.onload = loadWord;