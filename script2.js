document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader");
    window.addEventListener("load", function() {
        loader.classList.add("fade-out");
        setTimeout(() => loader.style.display = "none", 1000); 
    });
});
