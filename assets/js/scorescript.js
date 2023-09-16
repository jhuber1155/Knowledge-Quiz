var highScoresListed = document.querySelector("#player-scores");
var playerInitialsListed = document.querySelector("#player-list");
var highScoreList = document.querySelector("#high-scores-list");
var formList = document.querySelector("list-activate");
var resetButton = document.querySelector(".reset-button");
//These are arrays which will hold the players and scores and reference local storage for both saving and deploying the data to and from local storage.
var players = [];
var scores = [];
//This function starts by getting the player initials and score from local storate. If there are values to grab, the render functions will put them into lists on the High Scores page.
function iniths(){
    getPlayerInitials();
    getHighScores();
    // console.log(players);
    if(players.length > 0 && scores.length > 0){
        renderPlayers();
        renderScore();
    }
};
//This function will look for the key playerInitials in local storage and parse out with JSON any data it finds and put in the players array.
function getPlayerInitials(){
    var playerInitials = JSON.parse(localStorage.getItem("playerInitials"));
    // console.log(playerInitials);
    if (playerInitials !==null){ 
        players = playerInitials;
    };
};
//This function will look for the key highScores in local storage and parse out with JSON any data it finds and put in the scores array.
function getHighScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores !==null){
        scores = highScores;
    };
};
//This will take the local storage data, loop through the array, and put the corresponding player name onto the High Scores list with an appended list element, giving each player their own list element to display their name.
function renderPlayers() {
    playerInitialsListed.innerHTML = "";
    // console.log(players);
    for (var i = 0; i < players.length; i++) {
        var player = players[i];

        var li = document.createElement("li");
        li.textContent = player;
        li.setAttribute("data-index", i);

        playerInitialsListed.appendChild(li);
    };
};
//This will take the local storage data, loop through the array, and put the corresponding score onto the High Scores list with an appended list element, giving each player their own list element to display their score.
function renderScore() {
    highScoreList.innerHTML = "";
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        highScoreList.appendChild(li);
    };
};
//This function uses JSON to stringify the player initals on the page and put them into local storage using the setItem command.
function storePlayers(){
    localStorage.setItem("playerInitials", JSON.stringify(players));
};
//This function uses JSON to stringify the score on the page and put them into local storage using the setItem command.
function storeScore(){
    localStorage.setItem("highScores", JSON.stringify(scores));
};
//This function clears out any local storage in reguards to players and scores saved and wipes it clear.
function resetScores(){
    localStorage.clear();
};

resetButton.addEventListener("click", function (event){
    getPlayerInitials();
    getHighScores();
    renderPlayers();
    renderScore();
    storePlayers();
    storeScore();   
    resetScores();
});
iniths();

