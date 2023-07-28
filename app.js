// Initialize the scores for the home and away teams.
let homeTeamScore = 0
let awayTeamScore = 0

// Get references to the HTML elements that display the scores.
let homeTeamScoreEl = document.getElementById('homeTeamScoreEl')
let awayTeamScoreEl = document.getElementById('awayTeamScoreEl')

// Function to play a sound effect with optional volume adjustment (0 to 1).
function playSoundEffect (audioId, volume = 1) {
  const audioElement = document.getElementById(audioId)
  if (audioElement) {
    audioElement.volume = volume // Set the volume level.
    audioElement.play() // Play the audio.
  }
}

// Function to add points to a team and update the score display.
function addPointsToTeam (team, points) {
  let scoreElement
  // Determine which team's score to update based on the 'team' parameter.
  if (team === 'home') {
    homeTeamScore += points
    scoreElement = homeTeamScoreEl
  } else if (team === 'away') {
    awayTeamScore += points
    scoreElement = awayTeamScoreEl
  }

  // Update the score display for the corresponding team.
  if (scoreElement) {
    scoreElement.textContent = team === 'home' ? homeTeamScore : awayTeamScore
    updateFontSize(scoreElement) // Adjust the font size based on the score length.
  }

  // Play the appropriate sound effect based on the points scored, at 10% volume.
  if (points === 1) {
    playSoundEffect('audio1', 0.1)
  } else if (points === 2) {
    playSoundEffect('audio2', 0.1)
  } else if (points === 3) {
    playSoundEffect('audio3', 0.1)
  }
}

// Function to reset both teams' scores and update the display.
function resetScores () {
  homeTeamScore = 0
  awayTeamScore = 0
  homeTeamScoreEl.textContent = homeTeamScore
  awayTeamScoreEl.textContent = awayTeamScore
  updateFontSize(homeTeamScoreEl)
  updateFontSize(awayTeamScoreEl)

  // Play the 'game-over' sound effect at 10% volume.
  playSoundEffect('audio4', 0.1)
}

// Function to update the font size of the score display based on its content length.
function updateFontSize (scoreEl) {
  const containerWidth = scoreEl.clientWidth
  const textWidth = scoreEl.scrollWidth
  const scoreText = scoreEl.textContent

  // Adjust the font size to fit the score within the container, scaled by 1.4 for aesthetics.
  if (textWidth > containerWidth) {
    const fontSize = (containerWidth / scoreText.length) * 1.4
    scoreEl.style.fontSize = `${fontSize}px`
  } else {
    // If the score fits within the container, set a default font size of 60px.
    scoreEl.style.fontSize = '60px'
  }
}

// Wait for the DOM to load before initializing the score displays.
document.addEventListener('DOMContentLoaded', () => {
  updateFontSize(homeTeamScoreEl)
  updateFontSize(awayTeamScoreEl)
})
