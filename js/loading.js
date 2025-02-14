document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loadingScreen = document.getElementById("loadingScreen");

    if (loginBtn) {
        loginBtn.addEventListener("click", function(event) {
            event.preventDefault();

            loadingScreen.style.display = "flex";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        });
    }
});
