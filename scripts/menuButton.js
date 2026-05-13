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

function verificarTamanhoTela() {
    const largura = window.innerWidth;
    if (largura >= 1108) {
        nav.style.removeProperty('width');
        nav.style.removeProperty('height');
        nav.style.removeProperty('position');
        nav.style.removeProperty('display');
        nav.style.removeProperty('flex-direction');
        nav.style.removeProperty('gap');
    }
}
window.addEventListener('resize', verificarTamanhoTela);
verificarTamanhoTela();


/********************************CURRENT YEAR********************************/
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;