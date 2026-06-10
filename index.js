// const username = prompt("What's your name?");
// alert(`Hello, ${username}!`);

let score = 0;
function addScore() {
    return score++
}

const question1 = prompt(`Which of the following is a well-known Jazz Musician?
[1] Lance Armstrong
[2] Neil Armstrong
[3] Louie Armstrong
`);

const selection1 = Number(question1);

if (Number.isNaN(selection1)) {
  alert("You must enter a number.");
} else if (selection1 === 3) {
  alert("That's right, you cool cat! Score: " + score);
} else {
  alert("Try again.")
}
const question2 = prompt(`What dog breed is Sage?
[1] Toy Australian Shepherd
[2] German Shepherd
[3] Poodle
`);

const selection2 = Number(question2);

if (Number.isNaN(selection2)) {
  alert("You must enter a number.");
} else if (selection2 === 1) {
  alert("Hot dog! Sage is proud of your correct answer!");
} else {
  alert("That was 'ruff'. Please, try again.")
}

const question3 = prompt(`Who was the first person to land on the moon?
[1] Louie Armstrong
[2] Lance Armstrong
[3] Neil Armstrong
`);

const selection3 = Number(question3);

if (Number.isNaN(selection3)) {
  alert("You must enter a number.");
} else if (selection3 === 3) {
  alert("Lift off! That's correct!");
} else {
  alert("Earth to user, Earth to user. Please, try again.")
}