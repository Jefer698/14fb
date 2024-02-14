const yesBtn = document.querySelector('#yesBtn');
const card = document.querySelector('#card');
const closeBtn = document.querySelector('#closeBtn');

yesBtn.addEventListener('click', function () {
    card.classList.remove('hidden');
});


closeBtn.addEventListener('click', function () {
    card.classList.add('hidden');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});