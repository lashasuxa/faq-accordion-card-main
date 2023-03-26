// var questions = document.querySelectorAll("#question");
// var span = document.querySelectorAll("span");

// for (question of questions) {
//   question.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// }

// implement toggle
// implement parentNode of sibling

// // foreach (container of containers) {
// //   console.log(container);
// // }

// containers.forEach((container) => {
//   container.addEventListener("click", console.log("hi"));
// });

// var containerOne = document.getElementById("containerOne");
// var panel = document.getElementById("panel");
// var arrow_img = document.getElementById("arrow_img");

// containerOne.addEventListener("click", () => {
//   panel.classList.toggle("newStyle");
//   arrow_img.classList.toggle("rotateArrow");
// });

// var containers = document.querySelectorAll("#container");
// var panel = document.getElementsByTagName("span");
// console.log(panel);
// var arrow_img = document.getElementById("arrow_img");

// for (container of containers) {
//   container.addEventListener("click", (event) => {
//     console.log(event.target);
//     panel.classList.toggle("newStyle");
//     arrow_img.classList.toggle("rotateArrow");
//   });
// }

// var containerOne = document.getElementById("containerOne");
// console.log(containerOne.childNodes[3]);
// containerOne.childNodes[3].classList.toggle("newStyle");

var question = document.getElementById("question");
console.log(question.parentNode.childNodes[3]);

var paragraphs = document.getElementsByTagName("p");

for (paragraph of paragraphs) {
  paragraph.addEventListener("click", (event) => {
    event.target.parentNode.childNodes[4].toggle("newStyle");
    // console.log(event.target.parentNode.childNodes[4]);
  });
}
