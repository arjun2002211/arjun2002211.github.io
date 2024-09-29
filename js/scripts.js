function handleHamburger() {
    let menus = document.getElementById('menu');
    let hamburger = document.getElementById('hamburger');
    let close = document.getElementById('close');
    // menus.style.display = "none";
    menus.style.display = "inline"
    menus.style.margin = "0%";
    hamburger.style.display = "none";
    close.style.display = "inline";
    close.style.right = "0";
    close.style.position = "absolute";

}
// close navigation button
function handleClose() {
    let menus = document.getElementById('menu');
    let hamburger = document.getElementById('hamburger');
    let close = document.getElementById('close');
    if (menus.style.margin == "0%") {
        if (window.matchMedia("(max-width: 1000px)").matches) {
            menus.style.display = "hidden";
            menus.style.marginRight = "-100%";
            close.style.display = "none";
            hamburger.style.display = "inline";
            hamburger.style.right = "0";
            hamburger.style.position = "absolute";

        } else {
            /* the viewport is less than 400 pixels wide */
            hamburger.style.display = "none";
            menus.style.display = "inline";
            menus.style.marginRight = "0%";
        }
    }
}


// #popup form

const loginPopup = document.querySelector(".login-popup");
const popupClose = document.querySelector("#popup-close");
const form = document.querySelector('#popup-form');

window.addEventListener("load", function () {

    showPopup();
    // setTimeout(function(){
    //   loginPopup.classList.add("show");
    // },5000)
});

function showPopup() {
    const timeLimit = 5 // seconds;
    let i = 1;
    const timer = setInterval(function () {
        i++;
        if (i == timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
        }
        console.log(i)
    }, 1000);
}


popupClose.addEventListener("click", function () {
    console.log('button clicked');

    loginPopup.classList.remove("show");
});

form.addEventListener('submit', (event) => {
    
    console.log('pressed');
    let name = document.querySelector('#name');
    let number = document.querySelector('#phone');
    let errorMsg = document.querySelector('#error-message');
    console.log(name, number);
    if (!(name.value == "" && number.value == "")) {
        if (number.value.length == 10) {
            console.log('Form submitted');
            loginPopup.classList.remove("show");
        }
        else {
            event.preventDefault();
            errorMsg.innerText = "Input correct number";
        }
    }
    else {
        event.preventDefault();
        errorMsg.innerText = "Form can not submit";
    }
})











