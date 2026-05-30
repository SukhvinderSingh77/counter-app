// element accessing
//buttons
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

//p
const counter = document.getElementById("count");

let count = 0;
// increase
function increaseCount() {
  count++;
  counter.innerHTML = `
  <span class='active'>${count}</span>
  `
}
// decrease
function decreaseCount() {
  count--;
  if (count < 0) {
    count = 0;
  }
  counter.innerText = count;
}
// reset
function resetCount() {
  count = 0;
  counter.innerText = count;
}
