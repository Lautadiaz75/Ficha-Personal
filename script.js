document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
        const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
        applyTheme(newTheme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', toggleTheme);
});