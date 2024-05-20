const SEND_BTN = document.querySelector("#send");
const CHECKBOX = document.querySelector("#checkbox");
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

CHECKBOX.addEventListener("change", function () {
    if (this.checked) {
        SEND_BTN.removeAttribute("disabled");
    } else {
        SEND_BTN.setAttribute("disabled", "");
    }
});

SEND_BTN.addEventListener("click", async function (event) {
    event.preventDefault();
    const recipient = document.querySelector("#recipient").value;
    const theme = "Подробная информация об абонементах KOCHKAGYM";
    const text = `Здравствуйте, Вы оставили заявку на нашем сайте, поэтому спешу Вас проинформировать, что наш спортивный клуб предоставляет 3 вида абонементов: Месячный, Годовой и Годовой PLUS. Подробнее на нашем сайте в разделе <Абонементы>`;

    const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            recipient: String(recipient),
            theme: String(theme),
            text: String(text),
        }),
    });
    const data = await response.json();
    alert(data.message);
});
