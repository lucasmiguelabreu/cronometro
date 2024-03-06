


const cronometroElement = document.getElementById('cronometro');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

let tempo = 0;
let cron;

function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    return `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

function atualizarCronometro() {
    cronometroElement.textContent = formatarTempo(tempo);
    tempo++;
}

function start() {
    cron = setInterval(atualizarCronometro, 1000);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    tempo = 0;
    cronometroElement.textContent = formatarTempo(tempo);
}

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);