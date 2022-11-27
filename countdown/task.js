let current = document.getElementById("timer");
current.innerText = "Время";

let sec = 60;
current.innerText = f();

function f() {
  // при старте счетчика times() в первую секунду возникает 1,
  //затем обратный отсчет нормальный, для очистки сделал ф-ю с clearInterval, но это неправильно...
  clearInterval(current.innerText);
  setInterval(times, 1000);
}

function times() {
  if (sec) {
    sec--;
  } else {
    return;
  }
  console.log(sec);
  return (current.innerText = sec);
}
