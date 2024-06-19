function getTimeFromSeconds (seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    });
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function startTimer () {
    timer = setInterval(function() {
        seconds ++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

iniciar.addEventListener('click', function(e) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startTimer();
});

pausar.addEventListener('click', function(e) {
    relogio.classList.add('pausado');
    clearInterval(timer);

});

zerar.addEventListener('click', function(e) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
});


