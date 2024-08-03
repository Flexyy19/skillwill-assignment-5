// 1)
const hideButton = document.getElementById("hideButton");
const contentDiv = document.getElementById("contentDiv");

hideButton.addEventListener("click", () => {
  contentDiv.style.display = "none";
});

// 2)
const cardDiv = document.createElement("div");
cardDiv.setAttribute("id", "card");

const h2Element = document.createElement("h2");
h2Element.textContent = "Gandalf";

const aElement = document.createElement("a");
aElement.setAttribute("href", "#");
aElement.textContent = "Go to profile";

cardDiv.appendChild(h2Element);
cardDiv.appendChild(aElement);

document.body.appendChild(cardDiv);

// 3)
let score = 0;
const question = "What is the largest planet in our solar system?";
const answers = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswerIndex = 2;

function showQuestion(question, answers) {
  const questionElement = document.getElementById("question");
  questionElement.textContent = question;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer");
    button.onclick = () => checkAnswer(button, index);
    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedButton, selectedIndex) {
  const answerButtons = document.querySelectorAll("#answers button");

  if (selectedIndex === correctAnswerIndex) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  updateScore();

  answerButtons.forEach((button) => {
    button.onclick = null;
  });
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Score: ${score}`;
}

showQuestion(question, answers);
