/*FLIP CARDS*/
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

/*LINKS IMAGENS*/
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
const button = document.querySelector(".button");
const gridDiv = document.querySelector(".grid-header");
const logo = document.querySelector('.logo');
const links = nav.querySelectorAll('a');

container.addEventListener('click', () => {
    if (container.classList.contains('button')) {
        nav.classList.remove('menu-open');
        container.classList.remove('button');

        gridDiv.style.removeProperty('display');

        logo.style.removeProperty('display');

        nav.style.removeProperty('padding');
        nav.style.removeProperty('width');
        nav.style.removeProperty('height');
        nav.style.removeProperty('position');
        nav.style.removeProperty('display');
        nav.style.removeProperty('grid-template-rows');

        container.style.removeProperty('justify-self');
        container.style.removeProperty('padding');

        links.forEach((link) => {
            link.style.display = 'none';
        })


    } else {
        nav.classList.add('menu-open');
        container.classList.add('button');

        gridDiv.style.display = 'inline';

        logo.style.display = 'none';

        nav.style.padding = '0';
        nav.style.width = '100%';
        nav.style.height = '400px';
        nav.style.position = 'relative';
        nav.style.display = 'grid';
        nav.style.gridTemplateRows = '80px 50px 50px 50px 50px 50px';
        nav.style.transition = '0.5s';

        container.style.justifySelf = 'end';
        container.style.padding = '2rem';

        links.forEach((link) => {
            link.style.display = 'inline';
        })
    }
})
