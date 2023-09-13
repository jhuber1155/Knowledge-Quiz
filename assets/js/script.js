var countdownEl = document.querySelector("#countdownClock")
var highScoresListed = document.querySelector("#high-scores-listed")
var playerInitialsListed = document.querySelector("player-initials-listed");
var startButton = document.querySelector("#start-button");

var timer
var timerCountdown
var winner
var storedPlayerInitials
var storedHighScores
var playerInitials
var highScores



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

