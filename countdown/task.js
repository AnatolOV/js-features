// при старте счетчика times() в первую секунду возникает 1,затем обратный отсчет нормальный, для очистки сделал ф-ю с clearInterval.

/*function f() {
  // функция для очистки clearInterval, вместо 1 будет underfind, но это неправильно...
  clearInterval(current.innerText);
  setInterval(times, 1000);
}*/

const current = document.getElementById("timer");

let sec = new Date();
sec = sec.getSeconds();
console.log(sec);

current.innerText = setInterval(times, 1000);
setTimeout(() => {clearInterval(current.innerText); alert("stop")}, 3000);

function times() {
  if (sec > 0) {
    sec--;
    current.innerText = sec;
  } else if (sec == 0) {
    alert("Вы победили в конкурсе!");
    
  }
  console.log(sec);
}
