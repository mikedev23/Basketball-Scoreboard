let homeTeamScore = 0
let awayTeamScore = 0

let homeTeamScoreEl = document.getElementById('homeTeamScoreEl')
let awayTeamScoreEl = document.getElementById('awayTeamScoreEl')

function playSoundEffect (audioId) {
  const audioElement = document.getElementById(audioId)
  if (audioElement) {
    audioElement.play()
  }
}

function addPointsToTeam (team, points) {
  let scoreElement
  if (team === 'home') {
    homeTeamScore += points
    scoreElement = homeTeamScoreEl
  } else if (team === 'away') {
    awayTeamScore += points
    scoreElement = awayTeamScoreEl
  }

  if (scoreElement) {
    scoreElement.textContent = team === 'home' ? homeTeamScore : awayTeamScore
    updateFontSize(scoreElement)
  }

  if (points === 1) {
    playSoundEffect('audio1')
  } else if (points === 2) {
    playSoundEffect('audio2')
  } else if (points === 3) {
    playSoundEffect('audio3')
  }
}

function resetScores () {
  homeTeamScore = 0
  awayTeamScore = 0
  homeTeamScoreEl.textContent = homeTeamScore
  awayTeamScoreEl.textContent = awayTeamScore
  updateFontSize(homeTeamScoreEl)
  updateFontSize(awayTeamScoreEl)

  playSoundEffect('audio4')
}

function updateFontSize (scoreEl) {
  const containerWidth = scoreEl.clientWidth
  const textWidth = scoreEl.scrollWidth
  const scoreText = scoreEl.textContent

  if (textWidth > containerWidth) {
    const fontSize = (containerWidth / scoreText.length) * 1.4
    scoreEl.style.fontSize = `${fontSize}px`
  } else {
    scoreEl.style.fontSize = '60px'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateFontSize(homeTeamScoreEl)
  updateFontSize(awayTeamScoreEl)
})