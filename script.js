const toggle = document.getElementById("toggle");
const toggleContainer = document.getElementById("toggle-container")

const handleDarkMode = () => {
    toggle.classList.toggle('toggle-button-light')

    toggleContainer.classList.toggle('toggle-container-light')
}

toggle.addEventListener('click', handleDarkMode);