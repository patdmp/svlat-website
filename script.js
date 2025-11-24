// script.js

// Reset score in localStorage when starting the test
function resetScore() {
  localStorage.setItem('score', '0');
}

// Submit answers from the video page
function submitVideoAnswers() {
  let scoreIncrement = 0;
  // Get all checked radio inputs on the page
  const selected = document.querySelectorAll('input[type="radio"]:checked');
  selected.forEach((input) => {
    if (input.dataset.correct === 'true') {
      scoreIncrement += 1;
    }
  });
  // Update score in localStorage
  const currentScore = parseInt(localStorage.getItem('score') || '0', 10);
  localStorage.setItem('score', (currentScore + scoreIncrement).toString());
  // Navigate to the image quiz page
  window.location.href = 'image.html';
}

// Submit answers from the image page
function submitImageAnswers() {
  let scoreIncrement = 0;
  const selected = document.querySelectorAll('input[type="radio"]:checked');
  selected.forEach((input) => {
    if (input.dataset.correct === 'true') {
      scoreIncrement += 1;
    }
  });
  const currentScore = parseInt(localStorage.getItem('score') || '0', 10);
  localStorage.setItem('score', (currentScore + scoreIncrement).toString());
  window.location.href = 'results.html';
}

// Show results on the results page
function showResults() {
  const totalQuestions = 8; // 4 video + 4 image questions
  const score = parseInt(localStorage.getItem('score') || '0', 10);
  const scoreElement = document.getElementById('score');
  const totalElement = document.getElementById('total');
  if (scoreElement && totalElement) {
    scoreElement.textContent = score.toString();
    totalElement.textContent = totalQuestions.toString();
  }
}

// Restart the test from results page
function restartTest() {
  resetScore();
  window.location.href = 'index.html';
}