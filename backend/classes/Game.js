const fullDeck = require('./deck.JSON');

class Game {
    constructor() {
        this.players = [];
        this.deck = [];
        this.discard = [];
        this.draw = 1;
        this.maxPlay = 1;
        this.playLeft = 1;
        this.played = 0;
        this.currentPlayer = 0; //index of this.players
        this.goal = '';
        this.rules = [];
    }

    init() {
        fullDeck.forEach(card => {
            this.deck.push(card.filename);
        });
    }
    
    startPlay() {
        this.players.forEach(player => {
            this.draw(3, player);
        });
    }

    newPlayer(name) {
        this.players.push(new Player(name, this));
    }

    refillDeck() {
        this.discard.forEach(cardname => {
            this.deck.push(cardname);
        });
    }

    draw(n = 1, player = this.currentPlayer) {
        for (let i = 0; i < n; ++i){
            this.players[player].push(this.deck.splice(Math.floor(Math.random()*this.deck.length), 1));
            if(!this.deck.length) refill();
        }
    }

    play(cardname, player = this.currentPlayer) {

        ++this.played;
        --this.playLeft;
        if (this.played>=this.maxPlay) nextTurn();
    }

    nextTurn() {
        this.played = 0;
        this.playLeft = this.maxPlay;
        (++this.currentPlayer)%this.players.length;
    }
}
// <3 