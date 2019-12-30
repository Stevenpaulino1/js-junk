// const btn = document.querySelector("button");
// //
// btn.addEventListener("mouseover", function() {
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${height}px`;
//   btn.style.top = `${width}px`;
// });
//
// btn.addEventListener("click", function() {
//   btn.innerText = "You got me";
//   document.body.style.backgroundColor = "purple";
// });

let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet"
];

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  box.addEventListener("click", function() {
    console.log(`You clicked ${color}`);
  });
  container.append(box);
}

// document.body.addEventListener("keypress", function() {
//   console.log(event);
// });

const usernameInput = document.querySelector("#username");
const ul = document.querySelector("ul");

usernameInput.addEventListener("keypress", function() {
  if (event.key === "Enter") {
    console.log(this.value);
    newLi = document.createElement("li");
    newLi.innerText = this.value;
    ul.append(newLi);
    this.value = "";
  }
});
