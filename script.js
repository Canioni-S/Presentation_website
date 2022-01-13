
function Burgerfunction(x) {
  x.classList.toggle("change");

  var y = document.getElementById("navbar");
  if (y.className == "navbar") {
      y.className += " responsive";
  } else {
      y.className = "navbar";
  }
}

var string ="Hello Welcome to my personal website. My name is Stéphan Canioni, I am a Web developer in formation. I am currently looking for an unpaid company internship from the 9th Febuary to the 25th march. If you are interested in my profile, contact me with the contact form or visit my social networks.";
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout('frameLooper()', 25);

}
frameLooper();