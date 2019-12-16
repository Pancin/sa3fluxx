/** @module root/router */
'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const Game = require('../../classes/Game');
const eventBus = require('../../pubsub');

const testplayer1 = {
    name: 'Sigisgulfo',
    hand: ['chocMilk.png', 'money.png', 'rocketMoon.png'],
    keepers: [],
    creepers: []
};

const testplayer2 = {
    name: 'Pellicangelo',
    hand: ['bakedGoods.png', 'milk.png', 'dough.png'],
    keepers: [],
    creepers: []
};

let validContentType = (req) => {
    return req.is("application/json");
}

let acceptJSON = (req) => {
    return req.accepts('application/json');
}

let sendJSON = (res, status, obj) => {
    res.status(status).type('application/json').json(obj).end();
}

function buildCardURI(cardname) {
    // console.log(cardname)
    return './' + path.join('./media/deck', Game.cardType(cardname) + 's', cardname);
}
// console.log(buildCardURI('noGoal.png'));

function mapCardURI(array) {
    if (array === []) return [];
    let mapped = [];
    array.forEach(el => {
        mapped.push(buildCardURI(el));
    });
    return mapped;
}

// console.log(mapCardURI(testplayer1.hand));


function buildPlayerState(player) {
    let playerstate = {
        name: player.name,
        hand: mapCardURI(player.hand),
        keepers: mapCardURI(player.keepers),
        creepers: mapCardURI(player.creepers)
    };
    return playerstate;
}

// console.log(buildPlayerState(testplayer1));

function buildGameState() {
    let players = [];
    Game.players.map(player => {
        players.push(buildPlayerState(player));
    });
    // change untested part1 start (comment in between this and part2 below)
    let rules = [];
    Game.rules.forEach(rule => {
        let st = Game.cardSubType(rule);
        // console.log(st);
        if( st !== 'draw' && st !== 'play') {
            rules.push(rule);
        }
    });
    // console.log(rules)
    // change untested part1 end (comment in between this and part1 above)
    let gamestate = {
        players: players,
        deck: mapCardURI(Game.deck),
        discard: mapCardURI(Game.discard),
        draw: buildCardURI("draw" + Game.draw + ".png"),
        maxPlay: buildCardURI((Game.maxPlay === 1000) ? "playAll.png" : "play" + Game.maxPlay + ".png"),
        playLeft: Game.playLeft,
        currentPlayer: Game.currentPlayer,
        goal: buildCardURI(Game.goal),
        rules: mapCardURI(rules), //change untested part2 (comment this line to revert)
        // rules: mapCardURI(Game.rules), //change untested part2 (uncomment this line to revert)
        is: Game.is
    }
    // console.log(gamestate.maxPlay);
    // console.log(gamestate.draw);
    // console.log(gamestate.rules);
    // console.log(gamestate.players);
    return gamestate;
}

router.post('/login', (req, res) => {
    // console.log(req.body.nickname);
    // console.log(Game.isAvailable(req.body.nickname))
    if (!req.body.nickname) sendJSON(res, 400, { is: Game.is });
    else if (Game.is || !Game.isAvailable(req.body.nickname)) sendJSON(res, 403, { is: Game.is });
    else {
        Game.newPlayer(req.body.nickname);
        sendJSON(res, 201, { is: Game.is });
    }
});

router.post('/start', (req, res) => {
    if (Game.getPlayer(req.body.nickname)) {
        if (!Game.is) Game.startPlay();
        eventBus.emit("game.start", Game.is);
        sendJSON(res, 200, { is: Game.is });
    }
    else {
        sendJSON(res, 403, { is: Game.is });
    }
});

router.get('/gamestate', (req, res) => {
    if (!Game.is) res.sendStatus(403);
    else sendJSON(res, 200, buildGameState());
});

router.get('/log', (req,res) => {
    sendJSON(res, 200, {log:Game.log});
});

router.post('/selectedHandCard', (req, res) => {
    // player -> controllare se è l'active player
    // selectedCard -> se lo è, chiamare la funzione Play con selectedCard
    // console.log("Entered selected hand card");
    let cardname = path.basename(req.body.selectedCard);
    if(!Game.isPlaying(req.body.player) || !Game.containsCard(cardname, Game.getPlayer(req.body.player).hand)) res.sendStatus(403);
    else {
        Game.play(cardname);
        res.sendStatus(200);

    }
});

router.get('/win', (req, res) => {
    console.log(Game.winner);
    if (Game.winner) sendJSON(res,200,{winner:Game.winner});
    else res.sendStatus(403);
})

router.post('/salvaci', (req,res) => {
    Game.winner = 'ciao';
    res.sendStatus(200);
})

module.exports = router;