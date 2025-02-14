document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.querySelector(".theme-toggle");
    const body = document.body;
    const header = document.querySelector(".header");
    const icon = themeButton.querySelector("i");

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        header.classList.toggle("bg-dark"); // Alternar entre bg-dark y bg-light de Bootstrap
        header.classList.toggle("bg-light"); // Alternar entre bg-dark y bg-light de Bootstrap
        themeButton.classList.toggle("btn-outline-light");
        themeButton.classList.toggle("btn-outline-dark");

        // Agregar clase de rotación al icono
        icon.classList.add("rotate");

        // Remover la clase después de la animación para que se pueda repetir
        setTimeout(() => {
            icon.classList.remove("rotate");
        }, 500);

        // Cambia el ícono entre sol y luna
        if (body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    themeButton.addEventListener("click", toggleDarkMode);
});
