var numberGenerator = document.querySelector("#numberGenerator");
var button = document.querySelector("#generatorBtn");
var range = document.querySelector("#range")

function numberGen() {
  var num = Math.round(Math.random() * 10000);
  numberGenerator.innerHTML = num;
  return num;
}

button.addEventListener("click", numberGen);
