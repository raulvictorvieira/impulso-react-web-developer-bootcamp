const button = document.getElementById('mode-button');
const h1 = document.getElementById('mode-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode'

function changeClass() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode'
    const darkmode = 'Dark Mode'
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = `${darkmode} ON`;
        return;
    }

    button.innerHTML = darkmode;
    h1.innerHTML = `${lightMode} ON`;
}

button.addEventListener('click', changeMode = () => {
    changeClass();
    changeText();
})