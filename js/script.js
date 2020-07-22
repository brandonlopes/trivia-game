let root = document.documentElement;

if (document.getElementById("menu-icon")) {
    let menuIcon = document.getElementById("menu-icon");
    menuIcon.addEventListener("click", () => {
        root.style.setProperty("--menu-icon", "none");
    })
}

document.body.onload = () => {
    
}