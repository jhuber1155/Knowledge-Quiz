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
//These are arrays which will hold our local storage data and pull them when looking at the high score sheet. They are empty now but are populated later with the .push command
var players = [];
var scores = [];

var timer
var timerCountdown
var winner = false
var playerInitials
var highScores = 0
var currentQuestion = 0
//This is an object which will cycle through the follow list of quesitons and answers, reading through the array. This will assign the appropriate question and answer to its corresponding HMTL tags
var quizLayout = {
    question: "quizQuestionsArray[i]",
    answer1: "overallAnswersArray[i].quizAnswers[0]", 
    answer2: "overallAnswersArray[i].quizAnswers[1]", 
    answer3: "overallAnswersArray[i].quizAnswers[2]", 
    answer4: "overallAnswersArray[i].quizAnswers[3]", 
    answer5: "overallAnswersArray[i].quizAnswers[4]"
    };
//This is the question array which will be cycled through to match with the corresponding answer array
var quizQuestionsArray = ["What does HTML stand for?", "Cascading Style Sheets are read in what order?", "What is the Javascript file extension?", "What command do we use to add attributes in Javascript?", "If we want to add an element to the end another element in Javascript, we use which command?", 
"What is an object in Javascript?", "What does JSON stand for?", "What are semantic elements in HTML?", "What are some examples of assets in your code editor?", "Are you having fun with this quiz yet?"];
//This is the answer array of arrays, the answers will cycle within their own arrays and find their appropriate HTML spot in regards to their number in the index
var overallAnswersArray = [
["Hyper Typer Making Labels", "Hyper Text Markup Language", "How To Miss Lunch", "Hypo Textual Marked Language", "Hyper Text Markup Language"], 
["Top-to-Bottom", "Side-to-Side", "From the bottom up", "With a weathered eye", "Top-to-Bottom"],
[".java", ".mocha", ".script", ".js", ".js"],
[".changeStyle", ".setAttribute", ".hocusPocus", ".makeAttribute", ".setAttribute"],
[".appendChild", "+add", ".appendectomy", "element + element", ".appendChild"],
["A group of similar variables", "A planetary body", "A group of easily sortable data", "An object is a collection of properties, and a property is an association between a name (or key) and a value.", "An object is a collection of properties, and a property is an association between a name (or key) and a value."],
["JavaScript Object Notation", "Just Spying On Neighbors", "Justified Scripting On Notation", "Julienned Script Over Notes", "JavaScript Object Notation"],
["Elements which have sentimental meaning to their creators and readers", "Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way", "A way of transcribing HTML into other computer languages", "Elements, which when combined together, form a semantic philosophical argument", "Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way"],
["Secret Spies and the messages they leave inbetween the lines of code you read", "The fewer lines of code you have, the more its worth as an asset", "images, css style sheets, javascript files", "The extensions and debugging tools", "images, css style sheets, javascript files"],
["Yes", "Yes", "Yes", "Yes", "Yes"],
];

//This function will start our quiz, set the win condition to false for the game to not finish early, set a countdown timer of 90 seconds in which to answer all the questions, it will hide the start button and reveal the section element containing the question buttons. It will then run the quiz function.
function startQuiz() {
    winner = false;
    timerCountdown = 90;
    startButton.setAttribute("class", "hidden");
    countdownClock();
    sectionEl.removeAttribute("class", "hidden");
    quiz();
};
//This is the countdown clock function, it will start at 90 and then remove 1 second and update itself. If the timer is above 0 it will check to see if the win condition is met, otherwise, if it gets below zero, the game is over and the timer stops
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
// This is the quiz function, it is the logic which cycles through the arrays and places the corresponding questions and answers into their html elements. For example, answer1 comes from the quizLayout object and is assigned the answer from the current array and the first variable in the index of that answer array. It also assigns a data-answer tag to each one to track which button the user clicks and how it corresponds to the current answers.
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
//This function checks to see if the player has won if the high score is above 0, which means they got one right, and that they finish all 10 questions before the timer runs out.
function CheckWin(){
    if(highScores>0 && currentQuestion === 10){
        winner = true;
        clearInterval(timer);
        sectionEl.textContent = highScoreForm
        // renderPlayers();
        // renderScore();
    };
};
//This function pulls the player initials out of local storage and parses them with JSON. If there are initials in storage, this will pull them out and assign it the players variable
function getPlayerInitials(){
    var playerInitials = JSON.parse(localStorage.getItem("playerInitials"));
    if (playerInitials !==null){ 
        players = playerInitials;
    };
};
//This function pulls the high scores out of local storage and parses them with JSON. If there are high scores in storage, this will pull them out and assign it the scores variable.
function getHighScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores !==null){
        scores = highScores;
    };
};

//This function records the players variable into local storage using JSON stringify to put it into a format that local storage can read.
function storePlayers(){
    localStorage.setItem("playerInitials", JSON.stringify(players));
};
//This function records the scores variable into local storage using JSON stringify to put it into a format that local storage can read.
function storeScore(){
    localStorage.setItem("highScores", JSON.stringify(scores));
};
//This event listener corresponds to the start button, and when clicked on, will run the start Quiz function
startButton.addEventListener("click", startQuiz);
//This event listener has several factors going on. Upon clicking the elements with the card class will cyctle through their respective answers through the data-answer attribute using class and display hidden. If the answer equals the last answer in the answer array (which is hidden from the user) then it will register as correct, add 10 points to your score, and change the correct/incorrect paragraph element to green with the text correct. Otherwise, if you guessed a different button then it will compare to the hidden answer, and subtract 15 seconds from the countdown timer while changing the correct/incorrect text to wrong answer and the background color will turn red. It will then cycle through the array and check to see if it is the last question. If it was not the last question, it will go through the quiz function again and again until it is the last question, which  it will then change the elements to that of a form to fill out with the score you earned.
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
//This addEventListener is the form which the player inputs their initials to be stored in local storage and displayed on the High Scores page. It will alert the user if they dont enter initials. It will also push the players and scores into their respective arrays to be kept in local storage through the use of the store and get functions.
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