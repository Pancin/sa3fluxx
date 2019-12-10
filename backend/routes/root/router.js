/** @module root/router */
'use strict';

const express = require('express');
const router = express.Router();
const eventBus = require('../../emitter');
const mongoose = require('mongoose');
const path = require('path');
const fetch = require('node-fetch');

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

// function putPlayerByName(req, res) {
//     let filter = { name: req.body.name };
//     let update = req.body;

//     Player.findOneAndUpdate(filter, update, { new: true })
//         .then(updated => {
//             if (!updated) throw new Error('not found');
//             if (acceptJSON(req)) sendJSON(res, 200, updated);
//             else res.sendStatus(200);
//         })
//         .catch(err => {
//             console.log(err);
//             if (validContentType(req)) {
//                 let newPlayer = new Player(update);
//                 newPlayer.save()
//                     .then(saved => {
//                         if (!saved) throw new Error('failed to save');
//                         if (acceptJSON(req)) sendJSON(res, 201, saved);
//                         else res.sendStatus(201);
//                     })
//                     .catch(err => {
//                         console.log(err);
//                         res.sendStatus(400);
//                     });
//             }
//             else sendStatus(400);
//         });
// }

function postPlayerByName(body, res) {
    let newPlayer = new Player(body);
    newPlayer.save()
        .then(saved => {
            if (!saved) throw new Error('failed to save');
            sendJSON(res, 201, saved);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
}

router.post('/login', (req, res) => {
    Player.findOne({ name: req.body.nickname })
        .then(found => {
            // console.log(found);
            if (!found) throw new Error();
            else res.sendStatus(403);
        })
        .catch(err => {
            let antani = {
                name: req.body.nickname,
                roomId: req.body.roomId
            }
            postPlayerByName(antani, res);
        });
});

// const modelURL = 'localhost:3000/model';

// function doModelRequest(url, method, body) {
//     let headers = { 'Accept': 'application/json' };
//     let roba = path.join(modelURL, url);
//     console.log('roba: ' + roba)
//     return fetch(roba, { method: method, headers: headers, body: body });
// }

// router.post('/login', (req, res) => {
//     let url = path.join('player/byName/', req.body.nickname);
//     doModelRequest(url, 'PUT', {
//         name: req.body.nickname,
//         roomId: req.body.roomId
//     }).then(resModel => {
//         console.log('resmodel: ' + resModel);
//         let obj = {
//             nickname: resModel.name,
//             roomId: resModel.roomId
//         };
//         return sendJSON(res, resModel.status, obj);
//     }).catch(err => {
//         console.log(err);
//         return res.sendStatus(500);
//     });
// });

// //init and test purposes
// router.post('/all', (req, res) => {
//     let testCard = new Card({
//         name: 'test',
//         filename: 'test.png',
//         dataURL: 'test',
//         description: 'test',
//         type: 'test'
//     });
//     testCard.save()
//         .then(saved => {
//             console.log(saved);
//             let testGame = new Game({
//                 deck: [],
//                 activePlayer: 0,
//                 players: [],
//                 draw: 1,
//                 play: 1,
//                 playLeft: 1,
//                 rules: [],
//                 goal: {},
//                 discard: [],
//                 war: false,
//                 tv: false,
//                 silver: false,
//                 richBonus: false,
//                 poorBonus: false,
//                 noHandBonus: false,
//                 firstRandom: false,
//                 lastRandom: false,
//                 inflation: false
//             });
//             return testGame.save();
//         })
//         .then(saved => {
//             console.log(saved);
//             let testDeck = new Deck({
//                 size: 0,
//                 cards: []
//             });
//             return testDeck.save();
//         })
//         .then(saved => {
//             console.log(saved);
//             let testPlayer = new Player({
//                 order: 0,
//                 name: 'testname',
//                 isPlaying: false,
//                 hand: [],
//                 keepers: [],
//                 creepers: [],
//                 canWin: false
//             });
//             return testPlayer.save();
//         })
//         .then(saved => {
//             console.log(saved);
//             res.sendStatus(200);
//         })
//         .catch(err => {
//             console.log(err);
//             res.sendStatus(500);
//         });
// });

// router.get('/', (req, res) => {
//     res.status(200).type('html').write('hello world').end();
// });


module.exports = router;