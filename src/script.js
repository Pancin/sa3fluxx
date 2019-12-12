const axios = require('axios');

// Document elements
var gameImages = document.getElementById("game").getElementsByTagName("img");
var handImages = document.getElementById("hand").getElementsByTagName("img");
var leftPlayer = document.getElementById("leftName");
var topPlayer = document.getElementById("topName");
var rightPlayer = document.getElementById("rightName");
var bottomPlayer = document.getElementById("bottomName");

// !! FIND A WAY TO ALWAYS UPDATE THE EVENT LISTENERS

// Event Listeners
for (let i = 0; i < gameImages.length; i++){
    console.log(gameImages[i]);
    gameImages[i].addEventListener("click", () => selectedGameCard(gameImages[i]));
}
for (let i = 0; i < handImages.length; i++){
    console.log(handImages[i]);
    handImages[i].addEventListener("click", () => selectedHandCard(handImages[i]));
}
leftPlayer.addEventListener("click", () => selectedPlayer(leftPlayer));
topPlayer.addEventListener("click", () => selectedPlayer(topPlayer));
rightPlayer.addEventListener("click", () => selectedPlayer(rightPlayer));
bottomPlayer.addEventListener("click", () => selectedPlayer(bottomPlayer));

function selectedGameCard(card) {
    axios.put('/selectedGameCard',
        {
            player: bottomPlayer.innerHTML,
            selectedCard: card.src,
        },
        {
            headers: { 'Content-Type': 'application/json' }
        })
}

function selectedHandCard(player) {
    axios.put('/selectedHandCard',
        {
            player: bottomPlayer.innerHTML,
            selectedCard: card.src,
        },
        {
            headers: { 'Content-Type': 'application/json' }
        })
}

function selectedPlayer(player) {
    axios.put('/selectedPlayer',
        {
            player: bottomPlayer.innerHTML,
            selectedPlayer: player.innerHTML,
        },
        {
            headers: { 'Content-Type': 'application/json' }
        })
}