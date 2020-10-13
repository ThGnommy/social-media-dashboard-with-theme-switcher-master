const toggle = document.getElementById("toggle");
const toggleContainer = document.getElementById("toggle-container")

const backgroundDark = document.querySelectorAll(".background-dark");
const backgroundDarkTop = document.querySelectorAll(".background-dark-top");
const backgroundCard = document.querySelectorAll(".card-bg-dark")
const textPrimary = document.querySelectorAll(".dark-mode-desaturated-blue");
const textSecondary = document.querySelectorAll(".dark-theme-text-white");


const handleTheme = (e) => {
    e.preventDefault()
    toggle.classList.toggle('toggle-button-light')
    toggleContainer.classList.toggle('toggle-container-light')

    toggleClass(backgroundDark, 'background-white');
    toggleClass(backgroundDarkTop, 'background-white');
    toggleClass(backgroundCard, 'card-bg-white');
    toggleClass(textPrimary, 'light-mode-text-blue')
    toggleClass(textSecondary, 'light-theme-text-blue')
}

const toggleClass = (array, classString) => {
    array.forEach(element => {
        element.classList.toggle(classString)
    });
}

toggle.addEventListener('touchstart', handleTheme)
toggle.addEventListener('click', handleTheme);
