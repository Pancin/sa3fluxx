// const fullDeck = require('../deck.js');
const fullDeck = require("../lastDeck.js");
const Player = require("./Player");
const eventBus = require("../pubsub");

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
    this.goal = "noGoal.png";
    this.rules = []; // list of cardnames
    this.log = [];
    this.winner = null;

    this.firstRandom = false;
    this.lastRandom = false;
    this.noHandBonus = false;
    this.poorBonus = false;
    this.richBonus = false;
    this.silverLining = false;

    this.is = false;
    this.getCard = this.getCard.bind(this);
  }

  init() {
    this.deck = [];
    // console.log(fullDeck)
    fullDeck.cards.forEach(card => {
      this.deck.push(card.filename);
    });
  }

  startPlay() {
    this.init();
    if (this.players.length > 1) {
      this.players.forEach(player => {
        this.drawCard(3, this.players.indexOf(player));
      });
      this.is = true;
      this.beginTurn();
    } //else console.log("no.");
  }

  isAvailable(name) {
    let a = true;
    this.players.forEach(player => {
      if (name == player.name) a = false;
    });
    return a;
  }

  newPlayer(name) {
    this.players.push(new Player(name, this));
    if (this.players.length == 4) this.startPlay();
  }

  getPlayer(name) {
    let p;
    this.players.forEach(player => {
      if (player.name === name) p = player;
    });
    return p;
  }

  isPlaying(name) {
    return this.players[this.currentPlayer].name === name;
  }

  refillDeck() {
    this.discard.forEach(cardname => {
      this.deck.push(cardname);
    });
    this.discard = [];
  }

  getCard(cardname) {
    let c = {
      name: "error",
      filename: "error.png",
      type: "error"
    };
    fullDeck.cards.forEach(card => {
      // console.log(cardname);
      // console.log(card.filename);
      // console.log(card.type);
      if (cardname == card.filename) {
        c = card;
      }
    });
    return c;
  }

  cardType(cardname) {
    // console.log('cardType()')
    // console.log(cardname);
    return this.getCard(cardname).type;
  }

  cardSubType(cardname) {
    return this.getCard(cardname).subType;
  }

  containsCard(cardname, array) {
    let bool = false;
    array.forEach(card => {
      if (card == cardname) bool = true;
    });
    return bool;
  }

  cardFromDeck() {
    let d = this.deck;
    let card = d.splice(Math.floor(Math.random() * d.length), 1)[0];
    // console.log('cardFromDeck()')
    // console.log(card)
    if (!d.length) this.refillDeck();
    return card;
  }

  drawCard(n = 1, playerId = this.currentPlayer) {
    // console.log(this.players);
    // console.log(this.currentPlayer);
    // console.log(playerId)
    // console.log(this)
    let targetPlayer = this.players[playerId];
    // console.log(targetPlayer);
    for (let i = 0; i < n; ++i) {
      let card = this.cardFromDeck();
      // console.log('drawCard()')
      // console.log(card);
      while (this.cardType(card) == "creeper") {
        targetPlayer.creepers.push(card);
        card = this.cardFromDeck();
      }
      targetPlayer.hand.push(card);
    }
  }

  discardCard(cardname) {
    this.discard.push(cardname);
  }

  removeCardFromPlayer(cardname, playerId = this.currentPlayer) {
    let player = this.players[playerId];
    let handLength = player.hand.length;
    if (cardname == "all") {
      player.hand.forEach(card => this.discardCard(card));
      player.hand = [];
    } else {
      player.hand.splice(player.hand.indexOf(cardname), 1);
    }
    return handLength;
  }

  getCardFromRules(cardname) {}

  removeRuleBySubType(cardname) {
    this.rules.forEach(rulename => {
      if (this.cardSubType(rulename) == this.cardSubType(cardname))
        this.discardCard(this.rules.splice(this.rules.indexOf(rulename), 1)[0]);
    });
  }

  play(cardname, playerId = this.currentPlayer) {
    //no newRules and Actions for the moment
    let player = this.players[playerId];
    if (this.cardType(cardname) == "keeper") {
    //   console.log("Entered Keepers");
      this.removeCardFromPlayer(cardname, playerId);
      if (player.keepers.length === 9) {
        this.discardCard(cardname);
      } else {
        player.keepers.push(cardname);
      }
    } else if (this.cardType(cardname) == "goal") {
    //   console.log("adding goal");
      this.removeCardFromPlayer(cardname, playerId);
      this.goal = cardname;
    } else if (this.cardType(cardname) == "rule") {
      this.removeCardFromPlayer(cardname, playerId);
      this.removeRuleBySubType();
      this.rules.push(cardname);
      this.playRule(cardname);
    } else if (this.cardType(cardname) == "action") {
      this.removeCardFromPlayer(cardname, playerId);
      this.playAction(cardname);

    }
    this.nextPlay();
    this.log.push({
      cardname: this.getCard(cardname).name,
      nickname: player.name
    });
  }

  playRule(cardname) {
    if (cardname == "draw2.png") {
      this.modifyDraw(2);
    } else if (cardname == "draw3.png") {
      this.modifyDraw(3);
    } else if (cardname == "draw4.png") {
      this.modifyDraw(4);
    } else if (cardname == "draw5.png") {
      this.modifyDraw(5);
    } else if (cardname == "play2.png") {
      this.modifyPlay(2);
    } else if (cardname == "play3.png") {
      this.modifyPlay(3);
    } else if (cardname == "play4.png") {
      this.modifyPlay(4);
    } else if (cardname == "playAll.png") {
      this.modifyPlay(1000);
    } else if (cardname == "FpRandom.png") {
      this.firstRandom = true;
    } else if (cardname == "LpRandom.png") {
      this.lastRandom = true;
    } else if (cardname == "nhBonus.png") {
      this.noHandBonus = true;
    } else if (cardname == "pBonus.png") {
      this.poorBonus = true;
    } else if (cardname == "rBonus.png") {
      this.richBonus = true;
    } else if (cardname == "sLining.png") {
      this.silverLining = true;
    }
  }

  playAction(cardname) {
    if (cardname == "jackpot.png") {
      this.drawCard(3);
    } else if (cardname == "discAndDraw.png") {
      let discarded = this.removeCardFromPlayer("all");
      this.drawCard(discarded);
    }
    // else if (cardname == "exchKeep.png") {
    //     //
    // }
    // else if (cardname == "doItAgain.png") {
    //     //
    // }
    // else if (cardname == "simplify.png") {
    //     //
    // }
    else if (cardname == "reset.png") {
      this.rules.forEach(card => this.checkAndDiscard(card));
      this.rules = [];
    }
    // else if (cardname == "otherTurn.png") {
    //     //
    // }
    // else if (cardname == "trashRule.png") {
    //     //
    // }
    else if (cardname == "creepSweep.png") {
      this.players.forEach(player => {
        player.creepers.forEach(creep => this.discardCard(creep));
        player.creepers = [];
      });
    }
    // else if (cardname == "tashSmth.png") {
    //     //
    // }
    // else if (cardname == "stealSmth.png") {
    //     //
    // }
    // else if (cardname == "mixItUp.png") {
    //     //
    // }
  }

  modifyDraw(amount) {
    let bonusDraw = 0;
    if (this.draw < amount) {
      bonusDraw = amount - this.draw;
    }
    this.draw = amount;
    this.drawCard(bonusDraw);
  }

  modifyPlay(amount) {
    this.maxPlay = amount;
    this.playLeft = this.maxPlay - this.played;
  }

  checkAndDiscard(cardname) {
    if (
      cardname == "draw2.png" ||
      cardname == "draw3.png" ||
      cardname == "draw4.png" ||
      cardname == "draw5.png"
    ) {
      this.modifyDraw(1);
    } else if (
      cardname == "play2.png" ||
      cardname == "play3.png" ||
      cardname == "play4.png" ||
      cardname == "playAll.png"
    ) {
      this.modifyPlay(1);
    } else if (cardname == "FpRandom.png") {
      this.firstRandom = false;
    } else if (cardname == "LpRandom.png") {
      this.lastRandom = false;
    } else if (cardname == "nhBonus.png") {
      this.noHandBonus = false;
    } else if (cardname == "sLining.png") {
      this.silverLining = false;
    }

    this.discardCard(cardname);
  }

  nextPlay() {
    // console.log("Action ended");
    this.checkWin();
    ++this.played;
    --this.playLeft;
    if (
      this.played >= this.maxPlay ||
      !this.players[this.currentPlayer].hand.length
    )
      this.nextTurn();
    eventBus.emit("turn", undefined);
    // if (this.playLeft === 1 && this.lastRandom) {
    //     this.play();
    // }
  }

  nextTurn() {
    this.played = 0;
    this.playLeft = this.maxPlay;
    // console.log(this.players);
    this.currentPlayer++;
    this.currentPlayer = this.currentPlayer % this.players.length;
    this.beginTurn();
  }

  beginTurn() {
    if (this.noHandBonus && !this.players[this.currentPlayer].hand.length) {
      this.drawCard(3);
    }
    this.drawCard(this.draw);
  }

  //returns winning player name
  checkWin() {
    // console.log("silver="+this.silverLining)

    let goalname = this.goal;
    let winner;
    let winCondition = this.getCard(goalname).condition;
    // console.log(
    //   "winCondition",
    //   winCondition,
    //   this.getCard(goalname),
    //   Game.goal
    // );
    if (!winCondition) return null;
    if (winCondition["k"] === -1) {
      this.players.forEach(player => {
        // console.log(player);
        // console.log(player.keepers);
        if (
          this.containsCard(winCondition[0], player.keepers) &&
          this.containsCard(winCondition[1], player.keepers) &&
          (player.creepers.length === winCondition["c"] || this.silverLining)
        ) {
            // console.log("inside")
          winner = player.name;
        }
      });
    } else if (winCondition["k"] === 1) {
      this.players.forEach(player => {
        if (
          this.containsCard(winCondition[0], player.keepers) &&
          (player.creepers.length === winCondition["c"] || this.silverLining) &&
          player.keepers.length === 1
        ) {
            // console.log("inside")
          winner = player.name;
        }
      });
    }
    if (winner) {
        // console.log("win")
      eventBus.emit("win", winner);
      this.winner = winner;
      return winner;
    }
  }
}

const game = new Game();
module.exports = game;
