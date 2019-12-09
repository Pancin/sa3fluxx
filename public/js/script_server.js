// General variables
var hand = true;
var field = 0;
var selectPlayer = false;
var firstSelection;
var secondPlayer;
var activePlayer;
var rmRules = false;
var special = "";


// Functions
function selectedHandCard(clicked, clickingPlayer) {
    let isPlaying;
    // GET: PLAYER ISPLAYING (NAME)

    if (clicked.outerHTML == '<img src="../media/img/leftArrow.png" class="arrow">') {
        shift(true); //left
    }
    else if (clicked.outerHTML == '<img src="../media/img/rightArrow.png" class="arrow">') {
        shift(false); //right
    }
    else if (hand && isPlaying) {
        playCard(clicked, clickingPlayer);
        console.log("Card played");
    }
    else {
        console.log("Cannot play cards now");
    }
}

function selectedPlayer(selectedPlayerName, clickingPlayer) {
    let isPlaying;
    // GET: PLAYER ISPLAYING (NAME)
    if (selectPlayer && isPlaying) {
        if (special == "rotate") {
            // WIP
            selectPlayer = false;
            finishPlay();
        }
        else if (special == "trade") {
            let handCards;
            // GET: PLAYER (NAME) HAND
            // PUT: SUBSTITUTE PLAYER (NAME) HAND WITH RECEIVED ONE
            // PUT: SUBSTITUTE PLAYER (NAME) HAND WITH RECEIVED ONE
            selectPlayer = false;
            finishPlay();
        }
        else if (special == "take and use") {
            let handCards;
            // GET: PLAYER (NAME) HAND
            selectPlayer = false;
            // Play randomly one of those cards
        }
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

function playCard(card, clickingPlayer) {
    let cardName;
    let cardType;
    // GET: CARD NAME (URL)
    // GET: CARD TYPE (URL OR NAME)

    if (cardType == "Keeper") {
        // REMOVE: CARD (URL OR NAME) FROM PLAYER HAND (NAME)
        // PUT: CARD (URL OR NAME) TO PLAYER KEEPERS (NAME)
        // PUT: DECREASE PLAYS LEFT IN GAME STATE BY ONE
    }
    //Creepers can't be played by clicking on them
    else if (cardType == "newRule") {
        // REMOVE: CARD (URL OR NAME) FROM PLAYER HAND (NAME)
        // PUT: RULE (URL OR NAME) TO RULES IN GAME STATE (!! To check if a rul has to be overwritten and if so, add the old one to the discards pile)
        // PUT: DECREASE PLAYS LEFT IN GAME STATE BY ONE
    }
    else if (cardType == "Goal") {
        // REMOVE: CARD (URL OR NAME) FROM PLAYER HAND (NAME)
        // PUT: GOAL (URL OR NAME) TO GOAL IN GAME STATE
        // PUT: DECREASE PLAYS LEFT IN GAME STATE BY ONE

    }
    else if (cardType == "Action") {
        // REMOVE: CARD (URL OR NAME) FROM PLAYER HAND (NAME)
        actionCard(cardName);
        // PUT: CARD (URL OR NAME) TO DISCARDS PILE
    }
    else {
        console.log("error");
    }

    checkVictory();
}

function actionCard(cardName, clickingPlayer) {
    if (cardName == "Jackpot") {
        // ???: ADD CARDS TO PLAYER (NAME) HAND.
        finishPlay();
    }
    else if (cardName == "Discard and Draw") {
        let handCards;
        // GET: HAND FROM PLAYER
        let cardsNumber;
        // count cards in hand
        // DISCARD ALL CARDS OF THAT PLAYER AND DRAW NEW ONES (WITH A GIVEN NUMBER OF DRAWS)
        finishPlay();
    }
    else if (cardName == "Draw 2 and use 'em") {
        // no ideas yet
    }
    else if (cardName == "Draw 3, Play 2 of them") {
        // no ideas yet
    }
    else if (cardName == "Everybody Gets 1") {
        // no ideas yet
    }
    else if (cardName == "Exchange Keepers") {
        field = 2;
        special = "exchange";
    }
    else if (cardName == "Let's Do That Again") {
        // opens the window of the discard pile and select one of them, I guess
    }
    else if (cardName == "Let's Simplify") {
        let rules;
        // GET: RULES FROM GAME STATE
        let rulesNumber;
        // count rules
        field = rulesNumber/2;
        rmRules = true;
    }
    else if (cardName == "No Limits") {
        // REMOVE: ALL LIMITS CARDS IN GAME STATE AND PUT THE IN THE DISCARD PILE
        finishPlay();
    }
    else if (cardName == "Rotate Hands") {
        selectPlayer = true;
        special = "rotate";
    }
    else if (cardName == "Rules Reset") {
        // PUT: NULL IN RULES OF GAME STATE AND PUT EVERY REMOVED ONE TO THE DISCARD PILE
        finishPlay();
    }
    else if (cardName == "Take Another Turn") {
        // CHANGE NEXT IN GAME STATE (to decide better)
        finishPlay();
    }
    else if (cardName == "Taxation") {
        // no ideas yet
    }
    else if (cardName == "Trade Hands") {
        selectPlayer = true;
        special = "trade";
    }
    else if (cardName == "Trash a New Rule") {
        field = 1;
        rmRules = true;
    }
    else if (cardName == "Use What You Take") {
        selectPlayer = true;
        special = "take and use";
    }
    else if (cardName == "Creeper Sweeper") {
        // PUT: NULL IN ALL PLAYER'S CREEPERS AND PUT EVERY REMOVED ONE TO THE DISCARD PILE
        finishPlay();
    }
    else if (cardName == "Trash Something") {
        field = 1;
        special = "trash";
    }
    else if (cardName == "Steal Something") {
        field = 1;
        special = "steal";
    }
    else if (cardName == "Mix It All Up") {
        // GET/PUT/A LOT OF STUFF
        finishPlay();
    }
}

function selectedGameCard(clicked, clickingPlayer) {
    let isPlaying;
    // GET: PLAYER ISPLAYING (NAME)
    let cardType;
    // GET: CARD TYPE (URL)

    if (clicked.outerHTML != '<img src="../media/img/deck.png">' && isPlaying) { //so that it doesn't work on deck
        if (field > 0) {
            if (rmRules) {
                // REMOVE: RULE (URL) FROM GAME STATE AND PUT IT IN DISCARD PILE
                field--;
            }
            else if (special == "exchange") {
                if (cardType == "Keeper" && firstSelection != "") {
                    firstSelection = clicked.innerHTML;
                    // GET: NAME OF PLAYER WHO HAS THAT KEEPER (URL)
                    field--;
                }
                else if (cardType == "Keeper") { // && ...?
                    // REMOVE: CARD (URL) FROM PLAYER (NAME)
                    // REMOVE: CARD (URL) FROM PLAYER (NAME)
                    // PUT: CARD (URL) IN KEEPERS OF PLAYER (NAME)
                    // PUT: CARD (URL) IN KEEPERS OF PLAYER (NAME)
                }
            }
            else if (special == "trash") {
                if (cardType == "Keeper" || cardType == "Creeper") {
                    // REMOVE: CARD (URL) FROM PLAYER WHO HAS IT AND PUT IT IN THE PILE OF DISCARDS
                    field--;
                }
            }
            else if (special == "steal") {
                if (cardType == "Keeper") {
                    // REMOVE: CARD (URL) FROM PLAYER WHO HAS IT IN THE KEEPERS
                    // PUT: CARD (URL) TO PLAYER (NAME)
                    field--;
                }
            }
        }
        if (field == 0) {
            rmRules = false;
            special = "";
            firstSelection = "";
            secondPlayer = "";
            finishPlay();
        }
    }
}

function finishPlay() {
    // PUT: DECREASE PLAYS LEFT IN GAME STATE BY ONE
    let playsLeft;
    // GET: PLAYS LEFT FROM GAME STATE
    let lastRandom;
    // GET: LAST RANDOM FROM GAME STATE
    let firstRandom;
    // GET: FIRST RANDOM FROM GAME STATE
    let handCards;

    if (playsLeft == 1 && lastRandom) {
        // GET: HAND FROM PLAYER (NAME)
        // randomly play one card of the hand
    }
    if (playsLeft == 0) {
        // ???: CHANGE TURN TO PLAYERS THROUGH GAME STATE
        // PUT: PLAYS LEFT = PLAY IN GAME STATE
        activePlayer = "next";
        // GET: PLAYER THAT IS PLAYING

        if (firstRandom) {
            // GET: HAND FROM PLAYER (NAME) - the new player
            // randomly play one card of the hand
        }
    }
    
    // socket.io + ReactJS to update
}

function checkVictory() {
    //
}