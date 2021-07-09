var numberGenerator = document.querySelector("#numberGenerator")
var numberField = document.getElementById("numberGenerator")
var button = document.querySelector("#generatorBtn")
var generatedNum = ""



function numberGen(){
var num = Math.random() * 10000
        numberGenerator.innerHTML = num
        return num
}   
// numberGenerator.innerHTML = numberGen()



button.addEventListener("click", numberGen)