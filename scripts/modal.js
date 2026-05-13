const divs = document.querySelectorAll('div[class^="matricula-curso"]');
divs.forEach(div => {
    div.addEventListener('click', () => {
        const modalId = 'modal-' + div.id.split('-')[1];
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll('button[id^="close"]');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('dialog');
        modal.close();
    });
});
