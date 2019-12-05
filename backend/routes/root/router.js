/* */

const express = require('express');
const router = express.Router();
const eventBus = require('../../bin/pubsub');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fluxx', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
require('../../models/Card');
const Card = mongoose.model('Card');
require('../../models/Deck');
const Deck = mongoose.model('Deck');
require('../../models/Game');
const Game = mongoose.model('Game');
require('../../models/Player');
const Player = mongoose.model('Player');

let validContentType = (req) => {
    return req.is("application/json");
}

let acceptJSON = (req) => {
    return req.accepts('application/json');
}

let sendJSON = (res, status, obj) => {
    res.status(status).type('application/json').json(obj).end();
}

router.get('/', (req, res) => {
    res.status(200).type('html').write('hello world').end();
});

router.put('/deck/:deckId', (req,res) => {
    let update = {};
    update.size = req.body.size;
    update.cards = req.body.cards;

    Deck.findByIdAndUpdate(req.params.deckId, update, { new: true })
    .then(found => {
        if (req.accepts('application/json')) sendJSON(res, 200, found);
        else res.sendStatus(200);
    })
    .catch(err => {
        if (validContentType(req)) {
            let newDeck = new Deck(req.body);
            return newDeck.save()
            .then(saved => {
                if (acceptJSON(req)) sendJSON(res, 201, saved);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
        else return null;
    });
});

router.put('/game/:gameId', (req,res) => {
    let update = req.body;

    Game.findByIdAndUpdate(req.params.gameId, update, { new: true })
    .then(found => {
        if (req.accepts('application/json')) sendJSON(res, 200, found);
        else res.sendStatus(200);
    })
    .catch(err => {
        if (validContentType(req)) {
            let newGame = new Game(req.body);
            return newGame.save()
            .then(saved => {
                if (acceptJSON(req)) sendJSON(res, 201, saved);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
        else return null;
    });
});