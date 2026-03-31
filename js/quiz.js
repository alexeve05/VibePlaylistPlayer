function showQuestion(){
  const q = questions[currentQuestion];
  document.getElementById("question-text").textContent = q.question;
  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer.vibe));
    answersContainer.appendChild(btn);
  });
  document.getElementById("progress-text").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}
function selectAnswer(vibe){
  scores[vibe]++;
  currentQuestion++;
  if(currentQuestion < questions.length){
    showQuestion();
  } else {
    showResult();
  }
}
function showResult(){
  let topVibe = "cozy";
  let maxScore = 0;
  for(let vibe in scores){
    if(scores[vibe] > maxScore){
      maxScore = scores[vibe];
      topVibe = vibe;
    }
  }
  localStorage.setItem("selectedVibe", topVibe);
  window.location.href = "vibe.html";
}
const startBtn = document.querySelector(".start-quiz-button");
const introScreen = document.getElementById("intro-screen");
const quizContent = document.getElementById("quiz-content");
startBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  quizContent.style.display = "block";
  showQuestion();
});
let currentQuestion = 0;
let scores = {
  workout: 0,
  study: 0,
  aux: 0,
  cozy: 0,
  heylol: 0
};
const questions = [
  {
    question: "What are you doing right now?",
    answers: [
      { text: "Getting ready", vibe: "workout" },
      { text: "Studying", vibe: "study" },
      { text: "Driving", vibe: "aux" },
      { text: "Relaxing", vibe: "cozy" },
      { text: "Thinking about someone...", vibe: "heylol" }
    ]
  },
  {
    question: "Pick the time of day",
    answers: [
      { text: "Early morning", vibe: "workout" },
      { text: "Afternoon", vibe: "study" },
      { text: "Evening", vibe: "cozy" },
      { text: "Night", vibe: "heylol" }
    ]
  },
  {
    question: "Be honest… how focused are you?",
    answers: [
      { text: "Locked in", vibe: "study" },
      { text: "Trying my best", vibe: "cozy" },
      { text: "All over the place", vibe: "heylol" },
      { text: "Focused on vibes only", vibe: "aux" }
    ]
  }
];