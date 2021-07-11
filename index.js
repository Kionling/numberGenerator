var numberGenerator = document.querySelector("#numberGenerator");
var button = document.querySelector("#generatorBtn");

function numberGen() {
  var num = Math.round(Math.random() * 10000);
  numberGenerator.innerHTML = num;
  return num;
}

button.addEventListener("click", numberGen);
