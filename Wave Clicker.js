let score = 0;
let highScore = 0;
let gameOver = false;

function handleButtonClick() {
  if (!gameOver) {
    score++;
    updateScore();
  }
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;

  if (score > highScore) {
    highScore = score;
    updateHighScore();
  }
}

function updateHighScore() {
  const highScoreElement = document.getElementById('high-score');
  highScoreElement.textContent = highScore;
}

function resetGame() {
  score = 0;
  updateScore();
}

function displayGameOverMessage() {
  const gameOverMessageElement = document.getElementById('game-over-message');
  gameOverMessageElement.textContent = 'You died!';

  setTimeout(() => {
    gameOverMessageElement.textContent = '';
    resetGame();
    gameOver = false;
  }, 3000);
}

function submitScore() {
  const username = document.getElementById('username').value.trim();

  if (username === '') {
    alert('Please enter a valid username.');
    return;
  }

  const scoreList = JSON.parse(localStorage.getItem('scoreList')) || [];
  const existingEntryIndex = scoreList.findIndex(entry => entry.username === username);

  if (existingEntryIndex !== -1) {
    // User has already submitted a score
    if (scoreList[existingEntryIndex].score < highScore) {
      // Update the existing entry with the higher score
      scoreList[existingEntryIndex].score = highScore;
    }
  } else {
    // User hasn't submitted a score yet, add a new entry
    scoreList.push({ username, score: highScore });
  }

  scoreList.sort((a, b) => b.score - a.score); // Sort in descending order

  localStorage.setItem('scoreList', JSON.stringify(scoreList));
  updateScoreboard();
}

function updateScoreboard() {
  const scoreList = JSON.parse(localStorage.getItem('scoreList')) || [];
  const scoreListElement = document.getElementById('score-list');
  scoreListElement.innerHTML = '';

  scoreList.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.username}: ${entry.score}`;
    scoreListElement.appendChild(listItem);
  });
}

document.body.addEventListener('click', (event) => {
  if (gameOver && event.target.id !== 'username' && event.target.id !== 'submit-score') {
    resetGame();
  } else if (event.target.id !== 'click-button') {
    gameOver = true;
    displayGameOverMessage();
  }
});

// Prevent losing the game when clicking on the username input
document.getElementById('username').addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from reaching the body click event
});

// Initialize the high score and scoreboard
updateHighScore();
updateScoreboard();
