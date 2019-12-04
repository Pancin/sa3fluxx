// General variables
var hand = true;
var field = 0;
var player = false;


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


// Functions
function selectedGameCard(clicked) {
    if (clicked.outerHTML != '<img src="../media/img/deck.png">') { //so that it doesn't work on deck
        if (field > 0) {
            // ??
        }
        else {
            console.log("Error");
        }
    }
}

function selectedHandCard(clicked) {
    //check plays-left

    if (clicked.outerHTML == '<img src="../media/img/leftArrow.png" class="arrow">') {
        shift(true); //left
    }
    else if (clicked.outerHTML == '<img src="../media/img/rightArrow.png" class="arrow">') {
        shift(false); //right
    }
    else if (hand) {
        hand = false;
        playCard(clicked);
        console.log("Card played");
    }
    else {
        console.log("Cannot play cards now");
    }
}

function selectedPlayer(playerName) {
    if (player) {
        console.log(playerName.innerHTML);
        player = false;
    }
    else {
        console.log("test");
    }
}

function shift(direction) { //true = left, false = right
    if (direction) {
        // re-render towards left
    }
    else {
        //re-render towards right
    }
}

function playCard(card) {
    let cardName;
    let cardType;
    //obtian Card Type
    cardType = "Keeper";
    // 

    if (cardType == "Keeper") {
        // remove card from hand of player
        // add card player keepers
        // modify plays left on the game state

        // await remove and add
        // reduce plays left on the game state
    }
    //Creepers can't be played by clicking on them
    else if (cardType == "newRule") {
        // remove card from hand of player
        // check rules on the game state
        // await check
        // if must overwrite a rule:
        //      delete old rule from game state
        // add new rule to game state
        // add old rule card to discards

        // await remove and add
        // reduce plays left on the game state
    }
    else if (cardType == "Goal") {
        // remove card from hand of player
        // add/substitute goal to game state

        // await remove and add
        // reduce plays left on the game state
    }
    else if (cardType == "Action") {
        // remove card from hand of player
        // obtain Card Name through image src
        actionCard(cardName);
        // add card to discards
    }
    else {
        console.log("error");
    }

    if (!checkVictory()) {
        hand = true;
    }
    else{
        // dunno, display something cool
    }
    
    // socket.io + ReactJS to update
}

function actionCard(name) {
    if (cardName == "Jackpot") {
        // draw three cards
        // reduce plays left on the game state
    }
    else if (cardName == "Discard and Draw") {
        // counts the number of cards in your hand, then add them to discard pile and draw new ones
        // reduce plays left on the game state
    }
    else if (cardName == "Draw 2 and use 'em") {
        //
    }
    else if (cardName == "Draw 3, Play 2 of them") {
        //
    }
    else if (cardName == "Everybody Gets 1") {
        //
    }
    else if (cardName == "Exchange Keepers") {
        // select your keeper, then someone elses
        field = 2;
    }
    else if (cardName == "Let's Do That Again") {
        // opens the window of the discard pile and select one of them, I guess
    }
    else if (cardName == "Let's Simplify") {
        //
    }
    else if (cardName == "No Limits") {
        // removes all "limits" cards from rules in game state
        // reduce plays left on the game state
    }
    else if (cardName == "Rotate Hands") {
        //
    }
    else if (cardName == "Rules Reset") {
        // cleans all rules in game state
        // reduce plays left on the game state
    }
    else if (cardName == "Take Another Turn") {
        // change next? Something like that
        // reduce plays left on the game state
    }
    else if (cardName == "Taxation") {
        //
    }
    else if (cardName == "Trade Hands") {
        // select player with whom change cards
        player = true;
    }
    else if (cardName == "Trash a New Rule") {
        //
    }
    else if (cardName == "Use What You Take") {
        // select a player and play randomly one of their cards
    }
    else if (cardName == "Creeper Sweeper") {
        // removes all creepers in front of each player
        // reduce plays left on the game state
    }
    else if (cardName == "Trash Something") {
        // select a card to trash
        field = 1;
    }
    else if (cardName == "Steal Something") {
        // select a card to steal
        field = 1;
    }
    else if (cardName == "Mix It All Up") {
        // put all cards in an array and give them randomly
        // reduce plays left on the game state
    }
}

function checkVictory() {
    //
}