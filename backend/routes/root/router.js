/** @module root/router */
'use strict';

const express = require('express');
const router = express.Router();
const eventBus = require('../../emitter');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/fluxx', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
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

//init and test purposes
router.post('/all', (req, res) => {
    let testCard = new Card({
        name: 'test',
        filename: 'test.png',
        dataURL: 'test',
        description: 'test',
        type: 'test'
    });
    testCard.save()
        .then(saved => {
            console.log(saved);
            let testGame = new Game({
                deck: [],
                activePlayer: 0,
                players: [],
                draw: 1,
                play: 1,
                playLeft: 1,
                rules: [],
                goal: {},
                discard: [],
                war: false,
                tv: false,
                silver: false,
                richBonus: false,
                poorBonus: false,
                noHandBonus: false,
                firstRandom: false,
                lastRandom: false,
                inflation: false
            });
            return testGame.save();
        })
        .then(saved => {
            console.log(saved);
            let testDeck = new Deck({
                size: 0,
                cards: []
            });
            return testDeck.save();
        })
        .then(saved => {
            console.log(saved);
            let testPlayer = new Player({
                order: 0,
                name: 'testname',
                isPlaying: false,
                hand: [],
                keepers: [],
                creepers: [],
                canWin: false
            });
            return testPlayer.save();
        })
        .then(saved => {
            console.log(saved);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    res.status(200).type('html').write('hello world').end();
});

//expects a body {name:<playername>}
router.get('/player/byName', (req, res) => {
    let filter = {};
    filter.name = req.body.name;
    Player.findOne(filter)
        .then(found => {
            if (!found) throw new Error('not found');
            if (acceptJSON(req)) sendJSON(res, 200, found);
            else res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
});

router.put('/player/byName', (req, res) => {
    let filter = {};
    filter.name = req.body.name;
    let update = {};
    update.name = req.body.name;
    update.order = req.body.order;
    update.isPlaying = req.body.isPlaying;
    update.hand = req.body.hand;
    update.keepers = req.body.keepers;
    update.creepers = req.body.creepers;
    update.canWin = req.body.canWin;

    Player.findOneAndUpdate(filter, update, { new: true })
        .then(updated => {
            if (!updated) throw new Error('not found');
            if (acceptJSON(req)) sendJSON(res, 200, updated);
            else res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            if (validContentType(req)) {
                let newPlayer = new Player(update);
                newPlayer.save()
                    .then(saved => {
                        if (!saved) throw new Error('failed to save');
                        if (acceptJSON(req)) sendJSON(res, 201, saved);
                        else res.sendStatus(201);
                    })
                    .catch(err => {
                        console.log(err);
                        res.sendStatus(400);
                    });
            }
            else sendStatus(400);
        });
});

//expects a body {url:<cardURL>}
router.get('/card/byURL', (req, res) => {
    let filter = {};
    let filename = path.parse(req.body.url).base;
    console.log(filename);

    filter.filename = filename;
    Card.findOne(filter)
        .then(found => {
            if (!found) throw new Error('not found');
            if (acceptJSON(req)) sendJSON(res, 200, found);
            else res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
});

router.put('/card/byFilename', (req, res) => {
    let filter = { filename: req.body.filename };
    let update = {};
    update.filename = req.body.filename;
    update.name = (req.body.name) ? req.body.name : undefined;
    update.dataURL = (req.body.dataURL) ? req.body.dataURL : undefined;
    update.description = (req.body.description) ? req.body.description : undefined;
    update.type = (req.body.type) ? req.body.type : undefined;

    Card.findOneAndUpdate(filter, update, { new: true })
        .then(updated => {
            if (!updated) throw new Error('not found');
            if (acceptJSON(req)) sendJSON(res, 200, updated);
            else res.sendStatus(200);
        })
        .catch(err => {
            if (validContentType(req)) {
                let newCard = new Card(update);
                newCard.save()
                    .then(saved => {
                        console.log(saved);
                        res.sendStatus(201);
                    }).catch(err => {
                        console.log(err);
                        res.sendStatus(500);
                    });
            }
            else {
                res.sendStatus(400);
            }
        })
});

router.put('/deck/:deckId', (req, res) => {
    let update = {};
    update.size = req.body.size;
    update.cards = req.body.cards;

    Deck.findByIdAndUpdate(req.params.deckId, update, { new: true })
        .then(found => {
            if (!found) throw new Error('not found');
            if (req.accepts('application/json')) sendJSON(res, 200, found);
            else res.sendStatus(200);
        })
        .catch(err => {
            if (validContentType(req)) {
                let newDeck = new Deck(update);
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

// router.put('/game/:gameId', (req,res) => {
//     let update = req.body;

//     Game.findByIdAndUpdate(req.params.gameId, update, { new: true })
//     .then(found => {
//         if (req.accepts('application/json')) sendJSON(res, 200, found);
//         else res.sendStatus(200);
//     })
//     .catch(err => {
//         if (validContentType(req)) {
//             let newGame = new Game(req.body);
//             return newGame.save()
//             .then(saved => {
//                 if (acceptJSON(req)) sendJSON(res, 201, saved);
//             }).catch(err => {
//                 console.log(err);
//                 res.sendStatus(500);
//             });
//         }
//         else return null;
//     });
// });

module.exports = router;