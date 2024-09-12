const triggerMenu = document.querySelector('#menuTrigger')
const navContainer = document.querySelector('#navContainer')
const navLinks = document.querySelectorAll('.navLink')

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