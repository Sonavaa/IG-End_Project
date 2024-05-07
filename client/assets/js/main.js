const more_row = document.querySelector(".more")
const menu_Modal = document.querySelector(".menuModal")

more_row.addEventListener("click", function(e) {
    e.preventDefault();
    if (menu_Modal.classList.contains("hidden")) {
        menu_Modal.style.display = "block";
        menu_Modal.classList.remove("hidden");
    } else {
        menu_Modal.style.display = "none";
        menu_Modal.classList.remove("block");
        menu_Modal.classList.add("hidden");
    }
});