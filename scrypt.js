const yesBtn = document.querySelector('#yesBtn');
const card = document.querySelector('#card');
const closeBtn = document.querySelector('#closeBtn');
const bgVideo = document.querySelector('#bgVideo');

yesBtn.addEventListener('click', function () {
    card.classList.remove('hidden');
    bgVideo.classList.remove('video');
    // Reproducir el video de fondo
    bgVideo.play();
});

closeBtn.addEventListener('click', function () {
    card.classList.add('hidden');
    bgVideo.classList.add('hidden');
    // Pausar el video cuando se cierra la tarjeta
    bgVideo.pause();
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});