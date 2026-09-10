const carta1 = document.querySelector('.card1');
const carta2 = document.querySelector('.card2');
const carta3 = document.querySelector('.card3');
const carta4 = document.querySelector('.card4');
const carta5 = document.querySelector('.card5');

carta1.addEventListener('click', () => {
    carta1.classList.toggle('flipped');
});
carta2.addEventListener('click', () => {
    carta2.classList.toggle('flipped');
});
carta3.addEventListener('click', () => {
    carta3.classList.toggle('flipped');
});
carta4.addEventListener('click', () => {
    carta4.classList.toggle('flipped');
});
carta5.addEventListener('click', () => {
    carta5.classList.toggle('flipped');
});