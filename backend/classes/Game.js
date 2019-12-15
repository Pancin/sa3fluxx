const fullDeck = require('../deck.js');
const Player = require("./Player");

class Game {

    constructor() {
        this.players = []; // list of player Objects
        this.deck = []; // list of cardnames
        this.discard = []; // list of cardnames
        this.draw = 1;
        this.maxPlay = 1;
        this.playLeft = 1;
        this.played = 0;
        this.currentPlayer = 0; //index of this.players
        this.goal = '';
        this.rules = []; // list of cardnames

        this.firstRandom = false;
        this.lastRandom = false;
        this.noHandBonus = false;
        this.poorBonus = false;
        this.richBonus = false;
        this.silverLining = false;

        this.is = false;
    }

    is() {
        return this.is;
    }

    init() {
        fullDeck.forEach(card => {
            this.deck.push(card.filename);
        });
    }

    startPlay() {
        if (this.players.length > 1) {
            this.players.forEach(player => {
                this.draw(3, player);
            });
            this.is = true;
        }
        else console.log('no.');
    }

    newPlayer(name) {
        //names not unique yet
        this.players.push(new Player(name, this));
        if (this.players.length == 4) this.startPlay();
    }

    refillDeck() {
        this.discard.forEach(cardname => {
            this.deck.push(cardname);
        });
    }

    findCard(cardname) {
        fullDeck.forEach(card => {
            if (cardname == card.filename) return card;
        });
    }

    cardType(cardname) {
        return this.findCard(cardname).type;
    }

    cardSubType(cardname) {
        return this.findCard(cardname).SubType
    }

    containsCard(cardname, array) {
        array.forEach(card => {
            if (card == cardname) return true;
        })
    }

    cardFromDeck() {
        let card = this.deck.splice(Math.floor(Math.random() * this.deck.length), 1);
        if (!this.deck.length) refill();
        return card;
    }

    draw(n = 1, player = this.currentPlayer) {
        let targetPlayer = this.players[player];
        for (let i = 0; i < n; ++i) {
            let card = this.cardFromDeck();
            while (this.cardType(card) == 'creeper') {
                targetPlayer.creepers.push(card);
                card = this.cardFromDeck();
            }
            targetPlayer.hand.push(card);
        }
    }

    discard(cardname) {
        this.discard.push(cardname);
    }

    removeCardFromPlayer(cardname, playerId = this.currentPlayer) {
        let player = this.players[playerId];
        let handLength = player.hand.length;
        if (cardname == "all") {
            player.hand.forEach(card => this.discard(card));
            player.hand = [];
        }
        else {
            player.hand.splice(player.hand.indexOf(cardname), 1);
        }
        return handLength;
    }

    getCardFromRules(cardname) {

    }

    removeRuleBySubType(cardname) {
        this.rules.forEach(rulename => {
            if (this.cardSubType(rulename) == this.cardSubType(cardname)) this.discard(this.rules.splice(this.rules.indexOf(rulename), 1));
        });
    }

    play(cardname, playerId = this.currentPlayer) { //no newRules and Actions for the moment
        if (this.cardType(cardname) == "keeper") {
            this.removeCardFromPlayer(cardname, playerId);
            player.keeper.push(cardname);
            this.nextPlay();
        }
        else if (this.cardType(cardname) == "goal") {
            this.removeCardFromPlayer(cardname, playerId);
            this.goal = cardname;
            this.nextPlay();
        }
        else if (this.cardType(cardname) == "rule") {
            this.removeCardFromPlayer(cardname, playerId);
            this.removeRuleBySubType();
            this.rules.push(cardname);
            this.playRule(cardname);
            this.nextPlay();
        }
        else if (this.cardType(cardname) == "action") {
            this.removeCardFromPlayer(cardname, playerId);
            this.playAction(cardname);
        }
    }

    playRule(cardname) {
        if (cardname == "draw2.png") {
            this.modifyDraw(2);
        }
        else if (cardname == "draw3.png") {
            this.modifyDraw(3);
        }
        else if (cardname == "draw4.png") {
            this.modifyDraw(4);
        }
        else if (cardname == "draw5.png") {
            this.modifyDraw(5);
        }
        else if (cardname == "play2.png") {
            this.modifyPlay(2);
        }
        else if (cardname == "play3.png") {
            this.modifyPlay(3);
        }
        else if (cardname == "play4.png") {
            this.modifyPlay(4);
        }
        else if (cardname == "playAll.png") {
            this.modifyPlay(1000);
        }
        else if (cardname == "FpRandom.png") {
            this.firstRandom = true;
        }
        else if (cardname == "LpRandom.png") {
            this.lastRandom = true;
        }
        else if (cardname == "nhBonus.png") {
            this.noHandBonus = true;
        }
        else if (cardname == "pBonus.png") {
            this.poorBonus = true;
        }
        else if (cardname == "rBonus.png") {
            this.richBonus = true;
        }
        else if (cardname == "sLining.png") {
            this.silverLining = true;
        }
    }

    playAction(cardname) {
        if (cardname == "jackpot.png") {
            this.draw(3);
            this.nextPlay();
        }
        else if (cardname == "discAndDraw.png") {
            let discarded = this.removeCardFromPlayer("all");
            this.draw(discarded);
            this.nextPlay();
        }
        else if (cardname == "exchKeep.png") {
            // 
        }
        else if (cardname == "doItAgain.png") {
            // 
        }
        else if (cardname == "simplify.png") {
            // 
        }
        else if (cardname == "reset.png") {
            this.rules.forEach(card => this.checkAndDiscard(card));
            this.rules = [];
            this.nextPlay();
        }
        else if (cardname == "otherTurn.png") {
            // 
        }
        else if (cardname == "trashRule.png") {
            // 
        }
        else if (cardname == "creepSweep.png") {
            // 
        }
        else if (cardname == "tashSmth.png") {
            // 
        }
        else if (cardname == "stealSmth.png") {
            // 
        }
        else if (cardname == "mixItUp.png") {
            // 
        }
    }

    modifyDraw(amount) {
        let bonusDraw = 0;
        if (this.draw < amount) {
            bonusDraw = amount - this.draw;
        }
        this.draw = amount;
        this.draw(bonusDraw);
    }

    modifyPlay(amount) {
        this.maxPlay = amount;
        this.playLeft = this.maxPlay - this.played;
    }

    checkAndDiscard(cardname) {
        if (cardname == "draw2.png" || cardname == "draw3.png" || cardname == "draw4.png" || cardname == "draw5.png") {
            this.modifyDraw(1);

        }
        else if (cardname == "play2.png" || cardname == "play3.png" || cardname == "play4.png" || cardname == "playAll.png") {
            this.modifyPlay(1);
        }
        else if (cardname == "FpRandom.png") {
            this.firstRandom = false;
        }
        else if (cardname == "LpRandom.png") {
            this.lastRandom = false;
        }
        else if (cardname == "nhBonus.png") {
            this.noHandBonus = false;
        }
        else if (cardname == "pBonus.png") {
            this.poorBonus = false;
        }
        else if (cardname == "rBonus.png") {
            this.richBonus = false;
        }
        else if (cardname == "sLining.png") {
            this.silverLining = false;
        }

        this.discard(cardname);
    }

    nextPlay() {
        this.checkWin();
        ++this.played;
        --this.playLeft;
        if (this.played >= this.maxPlay || !this.players[this.currentPlayer].hand.length) nextTurn();
    }

    nextTurn() {
        this.played = 0;
        this.playLeft = this.maxPlay;
        (++this.currentPlayer) % this.players.length;
    }

    //returns winning player
    checkWin(goalname) {
        let winCondition = this.findCard(goalname).condition;
        if (winCondition['k'] === -1) {
            this.players.forEach(player => {
                if (this.containsCard(winCondition[0], player.keepers) &&
                    this.containsCard(winCondition[1], player.keepers) &&
                    player.creepers.length === winCondition['c']) 
                    return player.name;
            });
        }
        else if (winCondition['k'] === 1) {
            this.players.forEach(player => {
                if (this.containsCard(winCondition[0], player.keepers) &&
                    player.creepers.length === winCondition['c'] && 
                    player.keepers.length === 1) 
                    return player.name;
            });
        }
    }
}

const game = new Game();
module.exports = game;