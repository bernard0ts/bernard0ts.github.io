const triggerMenu = document.querySelector('#menuTrigger')
const navContainer = document.querySelector('#navContainer')
const navLinks = document.querySelectorAll('.navLink')
const buttonGithub = document.querySelector('#acessar-github')

triggerMenu.addEventListener('click', () => {
    menuTrigger.classList.toggle('show');
    navContainer.classList.toggle('show')
    navContainer.classList.add('fade')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuTrigger.classList.toggle('show');
        navContainer.classList.toggle('show');
        navContainer.classList.add('fade');
    });
});

buttonGithub.addEventListener('click', () => {
    window.open('https://github.com/calvinsteixeira', '_blank');
})