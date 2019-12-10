/** @module model/router */
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

router.get('/player/byName/:name', (req, res) => {
    let filter = { name: req.params.name };
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

router.put('/player/byName/:name', (req, res) => {
    let filter = { name: req.params.name };
    let update = req.body;

    Player.findOneAndUpdate(filter, update, { new: true })
        .then(updated => {
            if (!updated) throw new Error('not found');
            if (acceptJSON(req)) sendJSON(res, 200, updated);
            else res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            if (validContentType(req)) {
                update.name = req.params.name;
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

router.get('/card/byURL/:url', (req, res) => {
    let filename = path.parse(req.params.url).base;
    console.log(filename);
    let filter = { filename: filename };
    
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

router.put('/card/byURL/:url', (req, res) => {
    let filename = path.parse(req.params.url).base;
    let filter = { filename: filename };
    let update = req.body;

    Card.findOneAndUpdate(filter, update, { new: true })
        .then(updated => {
            if (!updated) throw new Error('not found');
            if (acceptJSON(req)) sendJSON(res, 200, updated);
            else res.sendStatus(200);
        })
        .catch(err => {
            if (validContentType(req)) {
                update.filename = filename;
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

router.get('/game/byRoom/:roomId', (req, res) => {
    let filter = {roomId:req.params.roomId};

    Game.findOne(filter)
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

router.put('/game/byRoom/:roomId', (req, res) => {
    let filter = {roomId:req.params.roomId};
    let update = req.body;

    Game.findOneAndUpdate(filter, update, { new: true })
    .then(updated => {
        if (!updated) throw new Error('not found');
        if (acceptJSON(req)) sendJSON(res, 200, updated);
        else res.sendStatus(200);
    })
    .catch(err => {
        if (validContentType(req)) {
            update.roomId = req.params.roomId;
            let newGame = new Game(update);
            newGame.save()
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
    });
});

router.get('/deck', (req, res) => {
    Deck.findOne({})
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

router.put('/deck', (req, res) => {
    Deck.findOneAndUpdate({}, req.body, {new:true})
    .then(updated => {
        if (!updated) throw new Error('not found');
        if (acceptJSON(req)) sendJSON(res, 200, updated);
        else res.sendStatus(200);
    })
    .catch(err => {
        if (validContentType(req)) {
            update.roomId = req.params.roomId;
            let newDeck = new Deck(update);
            newDeck.save()
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
    });
});

module.exports = router;