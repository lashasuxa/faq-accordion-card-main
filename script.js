var questions = document.querySelectorAll("#question");
var span = document.querySelectorAll("span");

for (question of questions) {
  question.addEventListener("click", (event) => {
    console.log(event.target);
  });
}

// implement toggle
// implement parentNode of sibling
