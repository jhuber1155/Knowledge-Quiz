var sectionEl = document.querySelector("#quiz-section")
var countdownEl = document.querySelector("#countdownClock")
var highScoresListed = document.querySelector("#high-scores-listed")
var playerInitialsListed = document.querySelector("player-initials-listed");
var startButton = document.querySelector("#start-button");
var questionGrab = document.querySelector("#question");
var answer1Grab = document.querySelector("answer1");
var answer2Grab = document.querySelector("answer2");
var answer3Grab = document.querySelector("answer3");
var answer4Grab = document.querySelector("answer4");
var answer5Grab = document.querySelector("answer5");

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
var answer5

var quizQuestionsArray = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];

var overallAnswersArray = [
    quizAnswers = ["Sample1Answer1", "Sample1Answer2", "Sample1Answer3", "Sample1Answer4", "Sample1Correct"], 
    quizAnswers = ["Sample2Answer1", "Sample2Answer2", "Sample2Answer3", "Sample2Answer4", "Sample2Correct"],
    quizAnswers = ["Sample3Answer1", "Sample3Answer2", "Sample3Answer3", "Sample3Answer4", "Sample3Correct"],
    quizAnswers = ["Sample4Answer1", "Sample4Answer2", "Sample4Answer3", "Sample4Answer4", "Sample4Correct"],
    quizAnswers = ["Sample5Answer1", "Sample5Answer2", "Sample5Answer3", "Sample5Answer4", "Sample5Correct"],
    quizAnswers = ["Sample6Answer1", "Sample6Answer2", "Sample6Answer3", "Sample6Answer4", "Sample6Correct"],
    quizAnswers = ["Sample7Answer1", "Sample7Answer2", "Sample7Answer3", "Sample7Answer4", "Sample7Correct"],
    quizAnswers = ["Sample8Answer1", "Sample8Answer2", "Sample8Answer3", "Sample8Answer4", "Sample8Correct"],
    quizAnswers = ["Sample9Answer1", "Sample9Answer2", "Sample9Answer3", "Sample9Answer4", "Sample9Correct"],
    quizAnswers = ["Sample0Answer1", "Sample0Answer2", "Sample0Answer3", "Sample0Answer4", "Sample0Correct"],
];

var quizLayout = {
    question: "quizQuestionsArray[i]",
    answer1: "overallAnswersArray[i].quizAnswers[0]", 
    answer2: "overallAnswersArray[i].quizAnswers[1]", 
    answer3: "overallAnswersArray[i].quizAnswers[2]", 
    answer4: "overallAnswersArray[i].quizAnswers[3]", 
    answer5: "overallAnswersArray[i].quizAnswers[4]"
};

// function init(){
//     getplayerInitials();
//     getHighScores();
// };

// function getplayerInitials(){
//     var storedPlayerInitials = localStorage.getItem("playerInitials");
//     playerInitialsListed.textContent = playerInitials;
// };

// function getHighScores(){
//     var storedHighScores = localStorage.getItem("highScores");
//     highScoresListed.textContent = highScores;
// };

// function startQuiz() {
//     winner = false;
//     timerCountdown = 90;
//     countdownClock();
// };

// function countdownClock() {
//     timer = setInterval(function () {
//         timerCountdown--;
//         countdownEl.textContent = timerCountdown;
//         if (timerCountdown >= 0){
//             if(winner && timerCountdown >0){
//                 clearInterval(timerCountdown);
//                 smartyPants();
//             };
//         };
//         if (timerCountdown === 0){
//             clearInterval(timer);
//             studyMore();
//         };
//     }, 1000);

// function smartyPants(){
    
// };

// function studyMore(){

// };

// function scoreBoard(){

// };

function Quiz(){
    // if("#start-button") data-state === "hidden"; {
       questionGrab = quizLayout.question;
        
        for (var i = 0; i < quizQuestionsArray.length; i++) {
            questionGrab.textContent = quizLayout.question.quizQuestionsArray[i]
        };
        
        for (var i = 0; i < overallAnswersArray.length; i++) {
            answer1Grab.textContent = quizLayout.answer1.overallAnswersArray[i].quizAnswers[0]
            answer2Grab.textContent = quizLayout.answer2.overallAnswersArray[i].quizAnswers[1]
            answer3Grab.textContent = quizLayout.answer3.overallAnswersArray[i].quizAnswers[2]
            answer4Grab.textContent = quizLayout.answer4.overallAnswersArray[i].quizAnswers[3]
            answer5Grab.textContent = quizLayout.answer5.overallAnswersArray[i].quizAnswers[4]
        };

    };

// };

// function setplayerInitials(){
//     playerInitialsListed.textContent = playerInitials;
//     localStorage.setItem("playerInitials", playerInitials)
// };
    
// function setHighScores(){
//     highScoresListed.textContent = highScores;
//     localStorage.setItem("highScores", highScores);
// };

// };

// startButton.addEventListener("click", startQuiz);
// sectionEl.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches("#start-button")) {
//       var state = element.getAttribute("data-state");
//       if (state === "visible") {
//         element.setAttribute("data-state", "hidden")
//         element.textContent= "";
//     };  
// };
// });

init();