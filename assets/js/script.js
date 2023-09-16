var sectionEl = document.querySelector("#quiz-section");
var highScoreListEl = document.querySelector(".high-score-input");
var highScoreForm = document.querySelector("#high-score-list");
var playerText = document.querySelector("#player-text");
var playerScoresEl = document.querySelector("#player-scores")
var countdownEl = document.querySelector("#countdownClock");
var startButton = document.querySelector("#start-button");
var questionGrab = document.querySelector("#question");
var answer1Grab = document.querySelector("#answer1");
var answer2Grab = document.querySelector("#answer2");
var answer3Grab = document.querySelector("#answer3");
var answer4Grab = document.querySelector("#answer4");
var answer5Grab = document.querySelector("#answer5");
var correctIncorrect = document.querySelector("#correctIncorrect");

var players = [];
var scores = [];

var timer
var timerCountdown
var winner = false
var playerInitials
var highScores = 0
var currentQuestion = 0

var quizLayout = {
    question: "quizQuestionsArray[i]",
    answer1: "overallAnswersArray[i].quizAnswers[0]", 
    answer2: "overallAnswersArray[i].quizAnswers[1]", 
    answer3: "overallAnswersArray[i].quizAnswers[2]", 
    answer4: "overallAnswersArray[i].quizAnswers[3]", 
    answer5: "overallAnswersArray[i].quizAnswers[4]"
    };

var quizQuestionsArray = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", 
"Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];

var overallAnswersArray = [
["Sample1Answer1", "Apples", "Sample1Answer3", "Sample1Answer4", "Apples"], 
["Pears", "Sample2Answer2", "Sample2Answer3", "Sample2Answer4", "Pears"],
["Sample3Answer1", "Sample3Answer2", "Sample3Answer3", "Orange", "Orange"],
["Sample4Answer1", "red", "Sample4Answer3", "Sample4Answer4", "red"],
["blue", "Sample5Answer2", "Sample5Answer3", "Sample5Answer4", "blue"],
["Sample6Answer1", "Sample6Answer2", "Sample6Answer3", "dogs", "dogs"],
["cats", "Sample7Answer2", "Sample7Answer3", "Sample7Answer4", "cats"],
["Sample8Answer1", "mouse", "Sample8Answer3", "Sample8Answer4", "mouse"],
["Sample9Answer1", "Sample9Answer2", "water", "Sample9Answer4", "water"],
["soda", "Sample0Answer2", "Sample0Answer3", "Sample0Answer4", "soda"],
];


function startQuiz() {
    winner = false;
    timerCountdown = 90;
    startButton.setAttribute("class", "hidden");
    countdownClock();
    sectionEl.removeAttribute("class", "hidden");
    quiz();
};

function countdownClock() {
    timer = setInterval(function () {
        timerCountdown--;
        countdownEl.textContent = timerCountdown;
        if (timerCountdown > 0){
            CheckWin();
        }else{
        clearInterval(timer);

        }
    }, 1000); 

};

function quiz(){

    quizLayout.question = quizQuestionsArray[currentQuestion]
    questionGrab.textContent = (quizLayout.question);
        
    quizLayout.answer1 = overallAnswersArray[currentQuestion][0]
    quizLayout.answer2 = overallAnswersArray[currentQuestion][1]
    quizLayout.answer3 = overallAnswersArray[currentQuestion][2]
    quizLayout.answer4 = overallAnswersArray[currentQuestion][3]
    quizLayout.answer5 = overallAnswersArray[currentQuestion][4]
    
    answer1Grab.textContent = (quizLayout.answer1);
    answer1Grab.setAttribute("data-answer", quizLayout.answer1)
    answer2Grab.textContent = (quizLayout.answer2);
    answer2Grab.setAttribute("data-answer", quizLayout.answer2)
    answer3Grab.textContent = (quizLayout.answer3);
    answer3Grab.setAttribute("data-answer", quizLayout.answer3)
    answer4Grab.textContent = (quizLayout.answer4);
    answer4Grab.setAttribute("data-answer", quizLayout.answer4)
};

function CheckWin(){
    if(highScores>0 && currentQuestion === 10){
        winner = true;
        clearInterval(timer);
        sectionEl.textContent = highScoreForm
        // renderPlayers();
        // renderScore();
    };
};

function getPlayerInitials(){
    var playerInitials = JSON.parse(localStorage.getItem("playerInitials"));
    if (playerInitials !==null){ 
        players = playerInitials;
    };
};

function getHighScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores !==null){
        scores = highScores;
    };
};


function storePlayers(){
    localStorage.setItem("playerInitials", JSON.stringify(players));
};

function storeScore(){
    localStorage.setItem("highScores", JSON.stringify(scores));
};

startButton.addEventListener("click", startQuiz);

sectionEl.addEventListener("click", function(event) {
    var element = event.target;
        var element = event.target;
            if (element.matches(".card")){
                var answer = element.getAttribute("data-answer");
                console.log(answer);
                var correct = overallAnswersArray[currentQuestion][4]
            if (answer === correct){
                highScores = (highScores + 10);
                correctIncorrect.textContent = ("That is Correct!")
                correctIncorrect.setAttribute("style", "background-color: limegreen");
                console.log(highScores);
            }else{
                timerCountdown = (timerCountdown - 15);
                correctIncorrect.textContent = ("Sorry! Wrong Answer!");
                correctIncorrect.setAttribute("style", "background-color: crimson");
            };currentQuestion++ 
            console.log(currentQuestion);
            if(currentQuestion > 9){
                sectionEl.setAttribute("class", "hidden")
            sectionEl.innerHTML = "";
            highScoreListEl.removeAttribute("class", "hidden")
            playerScoresEl.textContent = highScores
            }else{
            quiz();
            };
        };
    });
    highScoreForm.addEventListener("submit", function(event){
        event.preventDefault();
        var initials = playerText.value
        if (initials === "") {
            window.alert("Please put your intitials into the space provided");
            return;
        };
        console.log(players);
        players.push(initials);
        scores.push(highScores);
        console.log(initials);
        console.log(scores);
        storePlayers();
        storeScore();
        getPlayerInitials();
        getHighScores();
        
    });
// init();