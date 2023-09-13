var countdownEl = document.querySelector("#countdownClock")
var highScoresListed = document.querySelector("#high-scores-listed")
var playerInitialsListed = document.querySelector("player-initials-listed");
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var answer1Grab = document.querySelector("#answer1");

var timer
var timerCountdown
var winner
var storedPlayerInitials
var storedHighScores
var playerInitials
var highScores
var question
var answer1
var answer2
var answer3
var answer4

var quizQuestions = [
    {question: "Sample Question",
    answer1: "Sample Answer 1",
    answer2: "Sample Answer 2",
    answer3: "Sample Answer 3",
    answer4: "Sample Answer 4",
    correctanswer: "Sample Answer 1"}
];

question.textContent = quizQuestions.question;
answer1Grab.textContent = quizQuestions.answer1;
answer1Grab.setAttribute("data-answer", quizQuestions.answer1);

function init(){
    getplayerInitials();
    getHighScores();
};

function getplayerInitials(){
    var storedPlayerInitials = localStorage.getItem("playerInitials");
    playerInitialsListed.textContent = playerInitials;
};

function getHighScores(){
    var storedHighScores = localStorage.getItem("highScores");
    highScoresListed.textContent = highScores;
};


function startQuiz() {
    winner = false;
    timerCountdown = 90;
    countdownClock();
};

function countdownClock() {
    timer = setInterval(function () {
        timerCountdown--;
        countdownEl.textContent = timerCountdown;
        if (timerCountdown >= 0){
            if(winner && timerCountdown >0){
                clearInterval(timer);
                smartypants();
            };
        };
        if (timerCountdown === 0){
            clearInterval(timer);
            studymore();
        };
    }, 1000);

function setplayerInitials(){
    playerInitialsListed.textContent = playerInitials;
    localStorage.setItem("playerInitials", playerInitials)
};
    
function setHighScores(){
    highScoresListed.textContent = highScores;
    localStorage.setItem("highScores", highScores);
};

};
startButton.addEventListener("click", startQuiz);
init();

