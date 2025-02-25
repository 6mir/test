const mainShop = document.getElementById("main-shop")
const loaderShop = document.getElementById("loader-shop")

window.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        mainShop.style.display = "block"
        loaderShop.style.display = "none"
    }, 1000);
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-prev-slide",
        prevEl: ".swiper-button-next-slide",
    },
});


const sabadMain = document.getElementById("sabad-main")
const sabadClose = document.getElementById("sabad-close")
function sabadShow() {
    sabadMain.style.left = "0px"
    document.body.style.overflowY = "hidden";
}

sabadClose.addEventListener("click", function () {
    document.body.style.overflowY = "auto";
    sabadMain.style.left = "-999px"
})


const menuMain = document.getElementById("menu-main")
const menuShow = document.getElementById("menu-show")
menuShow.addEventListener("click", function (e) {
    e.stopPropagation();
    menuMain.style.bottom = "0px";
});
document.body.addEventListener("touchstart", function (e) {
    if (!menuMain.contains(e.target)) {
        menuMain.style.bottom = "-999px";
    }
});


const homeBtn = document.getElementById("home-btn")
homeBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0 });
})

const toggleTheme = () => {
    const theme = document.documentElement.classList.toggle("dark")
        ? "dark"
        : "light";
    localStorage.setItem("theme", theme);
};
document.documentElement.classList.toggle(
    "dark",
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
);

document.querySelector("#toggle-theme").addEventListener("click", toggleTheme);