var highScoresListed = document.querySelector("#player-scores")
var playerInitialsListed = document.querySelector("#player-text");
var highScoreForm = document.querySelector("#highScoreList")
var formList = document.getElementById("list-activate")

var players = [];
var scores = [];

function init(){
    getPlayerInitials();
    getHighScores();
};

function getPlayerInitials(){
    var playerInitials = JSON.parse(localStorage.getItem("playerInitials"));
    if (playerInitials !==null){ 
        players.textContent = playerInitials;
    };
};

function getHighScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores !==null){
        highScoresListed.textContent = highScores;
    };
};

function renderPlayers() {
    playerInitialsListed.innerHTML = "";
    for (var i = 0; i < players.length; i++) {
        var players = players[i];

        var li = document.createElement("li");
        li.textContent = players;
        li.setAttribute("data-index", i);

        highScoresListed.appendChild(li);
    };
};

function renderScore() {
    highScoresListed.innerHTML = "";
    for (var i = 0; i < scores.length; i++) {
        var scores = scores[i];

        var li = document.createElement("li");
        li.textContent = scores;
        li.setAttribute("data-index", i);

        highScoresListed.appendChild(li);
    };
};

function storePlayers(){
    localStorage.setItem("playerInitials", JSON.stringify(playerInitials));
};

function storeScore(){
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

highScoreForm.addEventListener("submit", function(event){
    event.preventDefault();
        var playerInitials = playerinput.value.trim();
            if (playerInitials === "") {
                window.alert("Please put your intitials into the space provided");
                return;
            }
        players.push(playerInitials);
        scores.push(highScores);

    getPlayerInitials();
    getHighScores();
    renderPlayers();
    renderScore();
    storePlayers();
    storeScore();
});