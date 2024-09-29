// hamburger function
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

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

  