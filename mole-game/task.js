let countW = 0;
let countF = 0;

for (let i = 1; i < 10; i++) {
  let goal = document.getElementById(`hole${i}`);

  goal.onclick = function () {
    if (goal.className == "hole hole_has-mole") {
      countW++;
    } else {
      countW = 0;
      countF--;
    }

    if (countW == 10 && countF != -5) {
      showMessage("Вы победили!");
    } else if (countF == -5) {
      showMessage("GAME OVER");
    }
  };
}

function showMessage(a) {
  countW = 0;
  countF = 0;
  return alert(a);
}
