const counter = document.querySelector("#clicker__counter");

const cake = document.querySelector("#cookie");
const imgCake = document.getElementById("cookie");

cake.onclick = () => {
  counter.innerText++;
  if (counter.innerText % 2 != 0) {
    imgCake.style.width = "300px";
  } else {
    imgCake.style.width = "200px";
  }
};
