
var menuToggle = document.getElementById('menu-toggle');
console.log("menutoggle",menuToggle);
menuToggle.addEventListener("click", showMenu, false);
var flyoutMenu = document.querySelector("#flyoutMenu");

function showMenu(e) {
    if (flyoutMenu.classList.contains("show")) {
        flyoutMenu.classList.remove("show");
        burgerMenu.classList.remove("open");
        console.log("menutoggle=",menuToggle.classList);
        menuToggle.classList.add("active");
        console.log("menutoggle=",menuToggle.classList);

        e.stopPropagation();
        document.body.style.overflow = "auto";
    } else {
        flyoutMenu.classList.add("show");
        burgerMenu.classList.add("open");
        // menuToggle.classList.remove("active");
        document.body.style.overflow = "hidden";
    }
}

function closeOverlay() {
    flyoutMenu.classList.remove("show");
}