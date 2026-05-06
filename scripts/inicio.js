/********************************FLIP CARDS********************************/
const carta1 = document.querySelector('.card1');
const carta2 = document.querySelector('.card2');
const carta3 = document.querySelector('.card3');

carta1.addEventListener('click', () => {
    carta1.classList.toggle('flipped');
});
carta2.addEventListener('click', () => {
    carta2.classList.toggle('flipped');
});
carta3.addEventListener('click', () => {
    carta3.classList.toggle('flipped');
});

/********************************FUNCTIONS ONCLICK********************************/
function open_facebook() {
    window.open('https://www.facebook.com/panteraviation/?locale=pt_BR', '_blank');
}
function open_instagram() {
    window.open('https://www.instagram.com/panteraviation/', '_blank');
}
function open_whatsapp() {
    window.open('https://wa.me/551124470709?text=Olá! Gostaria de obter mais informações.', '_blank');
}
function go_top() {
    window.scrollTo(0, 0);
}
function reload() {
    window.location.reload();
}

/********************************MENU BUTTON********************************/
const container = document.querySelector("#container");
const nav = document.querySelector('#menu');
const links = nav.querySelectorAll('a');

container.addEventListener('click', () => {
    if (container.classList.contains('button')) {
        container.classList.remove('button');   

        nav.style.removeProperty('opacity');
        nav.style.removeProperty('visibility');
        nav.style.removeProperty('padding');
        nav.style.removeProperty('transition');

    } else {
        container.classList.add('button');

        nav.style.padding = '0';
        nav.style.width = '100%';
        nav.style.height = '300px';
        nav.style.position = 'relative';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '20px';
        nav.style.transition = 'all .5s';
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';

        links.forEach((link) => {
            link.style.display = 'inline';
        })
    }
})
