let startTime, timerInterval;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
  const hours = Math.floor(ms / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((ms % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
  const milliseconds = (ms % 1000).toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function updateTime() {
  const now = Date.now();
  const timePassed = now - startTime + elapsedTime;
  document.getElementById('timer').textContent = formatTime(timePassed);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById('timer').textContent = "00:00:00:000";
  document.getElementById('lapList').innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = formatTime(Date.now() - startTime + elapsedTime);
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
}
