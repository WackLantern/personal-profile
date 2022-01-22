var time = new Date();
var hourNow = time.getHours();
var greeting;
if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Hello there!";
}

greeting += ' Nice to meet you, my name is William.';

var timeThing = document.getElementById("time");
timeThing.textContent = greeting;
