const words = ['javascript','dsa', 'github', 'bash', 'cobol', 'ring', 'tom', 'vim', 'typescript', 'unity', 'sql', 'go', 'ruby', 'rust', 'jython', 'matlab', 'lynx', 'lucid', 'kotlin', 'hack', 'coffeescript', 'ecmascript', 'python', 'html', 'css', 'nodejs', 'react', 'java', 'nextjs', 'babbage', 'angular'];


let word = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(word.length).fill('_');
let attempts = 6;

const wordElement = document.getElementById('word');
const lettersElement = document.getElementById('letters');
const messageElement = document.getElementById('message');
const resetButton = document.getElementById('reset');

function updateWordDisplay() {
    wordElement.textContent = guessedWord.join(' ');
}

function updateLettersDisplay() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    lettersElement.innerHTML = '';
    for (let letter of alphabet) {
        const letterElement = document.createElement('div');
        letterElement.textContent = letter;
        letterElement.className = 'letter';
        letterElement.addEventListener('click', () => guessLetter(letter));
        lettersElement.appendChild(letterElement);
    }
}

function guessLetter(letter) {
    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        updateWordDisplay();
        if (!guessedWord.includes('_')) {
            messageElement.textContent = 'Congratulations! You guessed the word!';
            disableLetters();
        }
    } else {
        attempts--;
        if (attempts === 0) {
            messageElement.textContent = `Game Over! The word was "${word}".`;
            disableLetters();
        } else {
            messageElement.textContent = `Incorrect guess. Attempts left: ${attempts}`;
        }
    }
}

function disableLetters() {
    const letterElements = document.querySelectorAll('.letter');
    letterElements.forEach(element => element.style.pointerEvents = 'none');
}

function resetGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(word.length).fill('_');
    attempts = 6;
    messageElement.textContent = '';
    updateWordDisplay();
    updateLettersDisplay();
}

resetButton.addEventListener('click', resetGame);

updateWordDisplay();
updateLettersDisplay();
