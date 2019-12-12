// Document elements
var gameImages = document.getElementById("game").getElementsByTagName("img");
var handImages = document.getElementById("hand").getElementsByTagName("img");
var leftPlayer = document.getElementById("leftName");
var topPlayer = document.getElementById("topName");
var rightPlayer = document.getElementById("rightName");
var bottomPlayer = document.getElementById("bottomName");


// Event Listeners
for (let i = 0; i < gameImages.length; i++){
    console.log(gameImages[i]);
    gameImages[i].addEventListener("click", () => selectedGameCard(gameImages[i], bottomPlayer.innerHTML));
}
for (let i = 0; i < handImages.length; i++){
    console.log(handImages[i]);
    handImages[i].addEventListener("click", () => selectedHandCard(handImages[i], bottomPlayer.innerHTML));
}
leftPlayer.addEventListener("click", () => selectedPlayer(leftPlayer));
topPlayer.addEventListener("click", () => selectedPlayer(topPlayer));
rightPlayer.addEventListener("click", () => selectedPlayer(rightPlayer));
bottomPlayer.addEventListener("click", () => selectedPlayer(bottomPlayer));

//PUT TO THE "SCRIPT_SERVER.JS"