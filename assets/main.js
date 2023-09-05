/* Simulare un countdown di 10 secondi e allert buon anno

*/

let seconds = 10;

const clock = setInterval(function () {
  document.querySelector(".countdown").innerHTML = seconds;

  if (seconds == 0) {
    clearInterval(clock);
    alert("Buon anno!");
  } else {
    seconds--;
  }
}, 1000);
