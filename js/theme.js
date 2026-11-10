// @ts-check
const userPrefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

const darkModeButton = /**@type {HTMLButtonElement | null} */ document.getElementById("toggler");
const darkToggle = (darkModeButton) ? darkModeButton.querySelector("#dark-toggle") : null;
const lightToggle = (darkModeButton) ? darkModeButton.querySelector("#light-toggle") : null;

/** Cambia la clase del body para indicar un modo oscuro 
 * @param {boolean} isDark
 * @returns {void}
 * */
const setTheme = (isDark) => {
    document.body.classList.toggle("dark", isDark);
    darkToggle?.classList.toggle("hidden", isDark);
    lightToggle?.classList.toggle("hidden", !isDark);
};

setTheme(userPrefersDarkTheme.matches);

darkModeButton?.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    setTheme(!isDark);
});