let timer;
let seconds = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
});

updateDisplay();