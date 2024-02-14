const yesBtn = document.querySelector('#yesBtn');
const card = document.querySelector('#card');
const closeBtn = document.querySelector('#closeBtn');
const audio = new Audio('musica.mp3'); // Ruta al archivo de audio

yesBtn.addEventListener('click', function () {
    card.classList.remove('hidden');
    // Reproducir la música de fondo
    audio.loop = true; // Reproducir en bucle
    audio.play();
});


closeBtn.addEventListener('click', function () {
    card.classList.add('hidden');
    // Detener la música cuando se cierra la tarjeta
    audio.pause();
    audio.currentTime = 0; // Reiniciar el tiempo de reproducción al inicio
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});