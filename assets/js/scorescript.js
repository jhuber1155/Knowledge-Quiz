var highScoresListed = document.querySelector("#player-scores");
var playerInitialsListed = document.querySelector("#player-list");
var highScoreList = document.querySelector("#high-scores-list");
var formList = document.querySelector("list-activate");
var resetButton = document.querySelector(".reset-button");

var players = [];
var scores = [];

function iniths(){
    getPlayerInitials();
    getHighScores();
    // console.log(players);
    if(players.length > 0 && scores.length > 0){
        renderPlayers();
        renderScore();
    }
};

function getPlayerInitials(){
    var playerInitials = JSON.parse(localStorage.getItem("playerInitials"));
    // console.log(playerInitials);
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

function storePlayers(){
    localStorage.setItem("playerInitials", JSON.stringify(players));
};

function storeScore(){
    localStorage.setItem("highScores", JSON.stringify(scores));
};

function resetPlayers(){
    localStorage.clear();
};

function resetScore(){
    localStorage.clear();
}

resetButton.addEventListener("click", function (event){
    getPlayerInitials();
    getHighScores();
    renderPlayers();
    renderScore();
    storePlayers();
    storeScore();   
    resetPlayers();
    resetScore();
});
iniths();

