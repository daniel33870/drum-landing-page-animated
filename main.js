const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

const navLinks = document.getElementById("nav-links");
const navBtns = document.getElementById("nav-btns")

const modeBtn = document.getElementById("mode-btn");
const modeBtnIcon = modeBtn.querySelector("i");

const modeNavBtn = document.getElementById("mode-nav-btn");
const modeBtnNavIcon = modeNavBtn.querySelector("i");

const body = document.querySelector("body")

modeBtn.addEventListener("click", (e) => {
    const isDark = body.classList.contains("dark")
    if(isDark){
        body.classList.remove("dark"); 
        modeBtnIcon.setAttribute("class", "ri-sun-line")
        modeBtnNavIcon.setAttribute("class", "ri-sun-line")
    }
    else{
        body.classList.toggle("dark");
        modeBtnIcon.setAttribute("class", "ri-moon-line")
        modeBtnNavIcon.setAttribute("class", "ri-moon-line")
    }
})

modeNavBtn.addEventListener("click", (e) => {
    const isDark = body.classList.contains("dark")
    if(isDark){
        body.classList.remove("dark"); 
        modeBtnIcon.setAttribute("class", "ri-sun-line")
        modeBtnNavIcon.setAttribute("class", "ri-sun-line")
    }
    else{
        body.classList.toggle("dark");
        modeBtnIcon.setAttribute("class", "ri-moon-line")
        modeBtnNavIcon.setAttribute("class", "ri-moon-line")
    }
})


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")
    navBtns.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container_left h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".container_left .container_btn", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container_right h4", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".container_right h2", {
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".container_right h3", {
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".container_right p", {
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".container_right .tent-1", {
    duration:1000,
    delay: 4000,
});

ScrollReveal().reveal(".container_right .tent-2", {
    duration:1000,
    delay: 4500,
});

ScrollReveal().reveal(".info", {
    ...scrollRevealOption,
    origin: "left",
    delay: 5000,
});

ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5500,
    interval: 500 ,
});