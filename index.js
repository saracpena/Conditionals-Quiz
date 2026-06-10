const username = prompt("What's your name?");
alert(`Hello, ${username}!`);

let score = 0;
function addFive(userInput) {
    const result = 1 + userInput
    return result
}

const guess = 10
const newScore = addFive(guess)

const question1 = prompt(`Which of the following is a well-known Jazz Musician?
[1] Lance Armstrong
[2] Neil Armstrong
[3] Louie Armstrong
`);

const question2 = prompt(`What dog breed is Sage?
[1] Toy Australian Shepherd
[2] German Shepherd
[3] Poodle
`);

const question3 = prompt(`Who was the first person to land on the moon?
[1] Louie Armstrong
[2] Lance Armstrong
[3] Neil Armstrong
`);