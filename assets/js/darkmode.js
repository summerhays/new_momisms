// ---
// ---
// Toggle light and dark mode

let darkMode = localStorage.getItem('darkMode');
// const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const colorScheme = document.querySelector('meta[name="color-scheme"]');
// const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

// Darkmode and disabledark mode are in the darkmode.js file

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode === 'enabled') {
    disableDarkMode();
  }
  // if it has been enabled, turn it off
  if (darkMode === 'lightmode') {
    enableDarkMode();
  }
  // if it hasn't been touched, let's see
  if (darkMode == null) {
    if (colorScheme === "light dark") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
});

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  document.body.classList.remove('lightmode');
  colorScheme.setAttribute("content", "dark"); // to dark mode
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
  colorScheme.setAttribute("content", "light"); // to light mode
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'lightmode');
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
if (darkMode === 'lightmode') {
  disableDarkMode();
}
