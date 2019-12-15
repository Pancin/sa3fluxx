/** @module root/router */
'use strict';

const express = require('express');
const router = express.Router();
const eventBus = require('../../emitter');
const path = require('path');
const Game = require('../../classes/Game');

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
    return path.join('../cards/deck', Game.cardType(cardname) + 's', cardname);
}
// console.log(buildCardURI('money.png'));

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
    let gamestate = {
        players: players,
        deck: mapCardURI(Game.deck),
        discard: mapCardURI(Game.discard),
        draw: buildCardURI("draw" + Game.draw + ".png"),
        maxPlay: buildCardURI((Game.maxPlay === 1000) ? "playAll.png" : "play" + Game.maxPlay + ".png"),
        playLeft: Game.playLeft,
        currentPlayer: Game.currentPlayer,
        goal: Game.goal,
        rules: mapCardURI(Game.rules),
        is: Game.is
    }
    // console.log(gamestate.rules);
    // console.log(gamestate.players);
    return gamestate;
}

router.post('/login', (req, res) => {
    if (!req.body.nickname) sendJSON(res, 400, { is: Game.is });
    else if (Game.is || !Game.isAvailable(req.body.nickname)) sendJSON(res, 403, { is: Game.is });
    else {
        Game.newPlayer(req.body.nickname);
        sendJSON(res, 201, { is: Game.is });
    }
});

router.post('/start', (req, res) => {
    if (!Game.is) {
        Game.startPlay();
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

router.post('/selectedHandCard', (req, res) => {
    // player -> controllare se è l'active player
    // selectedCard -> se lo è, chiamare la funzione Play con selectedCard
    cardname = path.basename(req.body.selectedCard);
    if(!Game.isPlaying(req.body.player) || !Game.containsCard(cardname, Game.getPlayer(player))) res.sendStatus(403);
    else play(cardname);
});

router.post('/selectedFieldCard', (req, res) => {

});

router.post('/selectedDiscard', (req, res) => {

});

module.exports = router;