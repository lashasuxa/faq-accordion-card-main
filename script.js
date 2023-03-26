var containers = document.querySelectorAll("#container");
var panel = document.getElementsByTagName("span");
var arrow_img = document.querySelectorAll("#arrow_img");

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function () {
    panel[i].classList.toggle("newStyle");
    arrow_img[i].classList.toggle("rotateArrow");
  });
}

// option with for of

// const containers = document.querySelectorAll("#container");
// const panels = document.getElementsByTagName("span");
// const arrows = document.querySelectorAll("#arrow_img");

// for (const [index, container] of containers.entries()) {
//   container.addEventListener("click", () => {
//     panels[index].classList.toggle("newStyle");
//     arrows[index].classList.toggle("rotateArrow");
//   });
// }
