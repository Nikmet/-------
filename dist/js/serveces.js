const MENU_BTN = document.querySelector(".header__menu");
const MENU_BTN_CLOSE = document.querySelector("#menu_close");
const MENU = document.querySelector("#menu");

MENU_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    MENU.style.transform = "translate(0px)";
});

MENU.addEventListener("click", function (event) {
    if (event.target == MENU_BTN_CLOSE) {
        event.preventDefault();
        console.log(event.code);
        MENU.style.transform = "translate(500px)";
    }
});
