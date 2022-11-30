const current = document.getElementById("timer");

let sec = new Date();
sec = sec.getSeconds();
current.textContent = sec;

let t = setInterval(times, 1000);

function times() {
  if (sec > 0) {
    sec--;
    current.textContent = sec;
  } else if (sec == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(t);
  }
}
