function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var circles = document.querySelectorAll("#gits circle"),
  progress = document.getElementsByTagName("text")[0];

for (var j = 0; j < circles.length; ++j) {
  var radius = parseInt(circles[j].getAttribute('r'), 10);
  circles[j].circumference = 2 * radius * Math.PI;
  circles[j].init = getRandomInRange(20, 80);
  circles[j].style.strokeDasharray = circles[j].init + " " + circles[j].circumference;
}

var i = 0;
var timer = setInterval(function () {
  if (i == 100) {
    clearInterval(timer);
  } else {
    for (var j = 0; j < circles.length; ++j) {
      circles[j].style.strokeDasharray = circles[j].init + i + " " + circles[j].circumference;
    }
  }
}, 500)
