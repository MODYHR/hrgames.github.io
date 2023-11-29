const words = [
  "Memory", "Game", "Javascript", "Developer", "Computer", "Programming",
  "Interface", "Algorithm", "HTML", "CSS", "Framework", "Library", "Database",
  "Security", "Authentication", "Authorization", "Encryption", "Decryption",
  "Server", "Client", "Responsive", "Design", "Frontend", "Backend", "API",
  "JSON", "XML", "Node.js", "React", "Vue", "Angular", "Express", "MongoDB",
  "SQL", "Bootstrap", "GitHub", "Version Control", "Deployment", "Hosting",
  "Web Development", "Mobile Development", "Testing", "Debugging", "Agile",
  "Scrum", "Waterfall", "DevOps", "Continuous Integration", "Continuous Deployment",
  "Machine Learning", "Artificial Intelligence", "Big Data", "Cloud Computing",
  "Cybersecurity", "Web Browser", "Operating System", "Linux", "Windows", "MacOS",
  "Open Source", "Closed Source", "Bug", "Feature", "Algorithm", "Data Structure",
  "Code Review", "Code Quality", "Code Snippet", "Stack Overflow", "Documentation",
  "Code Editor", "IDE", "User Interface", "User Experience", "Responsive Design",
  "Accessibility", "SEO", "Web Standards", "HTML5", "CSS3", "JavaScript ES6",
  "TypeScript", "WebAssembly", "GraphQL", "RESTful API", "SPA", "PWA", "Mobile App",
  "Serverless", "Microservices", "Containerization", "Docker", "Kubernetes"
];

let currentWord;
let options = [];
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});

function startGame() {
  // Clear options
  options = [];

  // Display a random word for 1 second
  displayRandomWord();

  // After 1 second, show options
  setTimeout(() => {
    generateOptions();
  }, 1000);
}

function displayRandomWord() {
  const wordDisplay = document.getElementById('word-display');
  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;

  // Clear previous options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  // Hide the word after 0.5 second
  setTimeout(() => {
    wordDisplay.textContent = '';
  }, 500);
}

function generateOptions() {
  const optionsContainer = document.getElementById('options-container');

  // Add the correct word to options
  options.push(currentWord);

  // Add three random similar words to options
  for (let i = 0; i < 3; i++) {
    options.push(getRandomSimilarWord());
  }

  // Shuffle the options
  options = shuffle(options);

  // Create option buttons
  for (const option of options) {
    const optionButton = document.createElement('button');
    optionButton.className = 'option';
    optionButton.textContent = option;
    optionButton.addEventListener('click', () => checkAnswer(option === currentWord));

    optionsContainer.appendChild(optionButton);
  }
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function getRandomSimilarWord() {
  let similarWord;
  do {
    similarWord = getRandomWord();
  } while (similarWord === currentWord);
  return similarWord;
}

function checkAnswer(isCorrect) {
  const scoreElement = document.getElementById('score');

  if (isCorrect) {
    score += 5;
    scoreElement.textContent = `Score: ${score}`;
    scoreElement.style.color = 'green';
    setTimeout(() => {
      scoreElement.style.color = ''; // Reset color after 0.5 seconds
    }, 500);
  } else {
    score -= 2;
    scoreElement.textContent = `Score: ${score}`;
    scoreElement.style.color = 'red';
    setTimeout(() => {
      scoreElement.style.color = ''; // Reset color after 0.5 seconds
    }, 500);
  }

  // Start the game again
  startGame();
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}


function startGame() {
  // Clear options
  options = [];


  // After 2 seconds, display a random word for 1 second
  setTimeout(() => {
    displayRandomWord();
    
    // After 1 second, show options
    setTimeout(() => {
      generateOptions();
    }, 1000);

  }, 2000);
}

function displayGetReady() {
  const wordDisplay = document.getElementById('word-display');
  wordDisplay.textContent = 'Get Ready!';
}

