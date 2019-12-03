var hand = true;
var field = 0;


var gameImages = document.getElementById("game").getElementsByTagName("img");
var handImages = document.getElementById("hand").getElementsByTagName("img");

for (let i = 0; i < gameImages.length; i++){
    console.log(gameImages[i]);
    gameImages[i].addEventListener("click", () => selectedGameCard(gameImages[i]));
}
for (let i = 0; i < handImages.length; i++){
    console.log(handImages[i]);
    handImages[i].addEventListener("click", () => selectedHandCard(handImages[i]));
}

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

    if (hand) {
        hand = false;
        playCard(clicked);
        console.log("card played");
    }
    else {
        console.log("Error");
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
    }
    else if (cardType == "Goal") {
        // remove card from hand of player
        // add/substitute goal to game state

        // await remove and add
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

    // reduce plays left on the game state

    if (!checkVictory()) {
        hand = true;
    }
    else{
        // dunno, display something cool
    }
    
    // socket.io + ReactJS to update
}

function actionCard(name) {
    //
}

function checkVictory() {
    //
}