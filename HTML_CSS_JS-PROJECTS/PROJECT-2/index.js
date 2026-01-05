const questions = [
  { question: "HTML stands for?", options: ["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Mark Language","Home Tool Markup Language"], answer: 0 },
  { question: "Which language is used to style web pages?", options: ["HTML","CSS","JavaScript","XML"], answer: 1 },
  { question: "Which is not a JavaScript framework?", options: ["React","Angular","Vue","Django"], answer: 3 },
  { question: "Which tag is used to include JavaScript in HTML?", options: ["<js>","<javascript>","<script>","<code>"], answer: 2 },
  { question: "Which keyword declares a variable in JavaScript?", options: ["var","let","const","int"], answer: 0 }
];

// DOM
const startBtn = document.querySelector(".start");
const startScreen = document.querySelector(".screen.active");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.querySelector(".result");

const questionEl = document.querySelector(".question");
const answersEl = document.getElementById("ans");
const currentQEl = document.getElementById("currentq");
const totalQEl = document.querySelector(".totalq");
const scoreEl = document.querySelector(".score");
const progressEl = document.querySelector(".progress");

const finalScoreEl = document.getElementById("final-score");
const maxScoreEl = document.getElementById("max-score");
const resultMsgEl = document.getElementById("result-msg");

let currentQuestion = 0;
let score = 0;
let wrong = 0;

totalQEl.textContent = questions.length;
maxScoreEl.textContent = questions.length;

// Start quiz
startBtn.addEventListener("click", () => {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
});

function showQuestion(){
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  currentQEl.textContent = currentQuestion + 1;
  scoreEl.textContent = score;

  answersEl.innerHTML = "";

  q.options.forEach((option, index)=>{
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.addEventListener("click", ()=>{
      checkAnswer(index, btn);
    });

    answersEl.appendChild(btn);
  });

  updateProgress();
}

function checkAnswer(selected, btn){
  const correctIndex = questions[currentQuestion].answer;

  const allButtons = answersEl.querySelectorAll("button");
  allButtons.forEach((b,i)=>{
    if(i===correctIndex) b.classList.add("correct");
    if(i===selected && i!==correctIndex) b.classList.add("wrong");
    b.disabled = true;
  });

  if(selected === correctIndex) score++;
  else wrong++;

  scoreEl.textContent = score;

  currentQuestion++;

  setTimeout(()=>{
    if(currentQuestion<questions.length) showQuestion();
    else showResult();
  },1200);
}

function updateProgress(){
  progressEl.style.width = (currentQuestion/questions.length*100)+"%";
}

function showResult(){
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreEl.textContent = score;

  if(score===questions.length) resultMsgEl.textContent = `🔥 Perfect! All correct!`;
  else resultMsgEl.textContent = `You got ${score} right and ${wrong} wrong!`;
}

// Restart
document.querySelector(".restart").addEventListener("click", ()=>{
  currentQuestion=0;
  score=0;
  wrong=0;
  progressEl.style.width="0%";
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
});
