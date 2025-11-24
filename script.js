// script.js

// Reset score in localStorage when starting the test
function resetScore() {
  localStorage.setItem('score', '0');
}

// Submit answer on a question page and navigate to the next page
function submitAnswer(nextPage) {
  // Find the selected radio button
  const selected = document.querySelector('input[type="radio"]:checked');
  if (selected && selected.dataset.correct === 'true') {
    const currentScore = parseInt(localStorage.getItem('score') || '0', 10);
    localStorage.setItem('score', (currentScore + 1).toString());
  }
  // Navigate to the next page
  window.location.href = nextPage;
}

// Legacy functions retained for backward compatibility but no longer used
function submitVideoAnswers() {
  submitAnswer('image1.html');
}
function submitImageAnswers() {
  submitAnswer('results.html');
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