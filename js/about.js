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
// parallax effect
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.hero');
  const parallax2 = document.querySelector('.hero2');
  const leftImage = document.querySelector('.left-image');
  const rightImage = document.querySelector('.right-image');
  let scrollPosition = window.pageYOffset;

  // Move the main background upwards with the parallax effect
  parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
  parallax2.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';

  // Move the left small image upwards with the same speed
  leftImage.style.transform = `translateY(${-(scrollPosition * 0.3)}px) rotate(-30deg)`;

  // Move the right small image upwards with the same speed
  rightImage.style.transform = `translateY(${-(scrollPosition * 0.3)}px) rotate(30deg)`;

});


// scroll indicator
// JavaScript to handle scroll events and activate the corresponding radio button
const sections = document.querySelectorAll('section');
const radios = document.querySelectorAll('.scroll-indicator input[type="radio"]');

window.addEventListener('scroll', () => {
  let current = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = index;
    }
  });

  radios.forEach((radio, index) => {
    radio.checked = index === current;
  });
});


// counter-section
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});



