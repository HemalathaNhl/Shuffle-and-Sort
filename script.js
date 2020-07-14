var numElements = [];
var numbers = [];
var count = 9;
for (let i = 1; i <= count; i++) {
  numElements.push("num" + i);
  numbers.push(i);
}
document.getElementById("shuffle-btn").addEventListener("click", shuffleNumbers);
document.getElementById("sort-btn").addEventListener("click", sortNumbers);
function shuffleNumbers() {
  numbers.sort(() => Math.random() - 0.5);
  assignNumbers();
}

function sortNumbers() {
  numbers.sort(function (a, b) { return a - b });
  assignNumbers();
}
function assignNumbers() {
  for (let i = 0; i < count; i++) {
    document.getElementById(numElements[i]).textContent = numbers[i];
  }
}