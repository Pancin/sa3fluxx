/** @module root/router */
'use strict';

const express = require('express');
const router = express.Router();
const eventBus = require('../../emitter');
const path = require('path');
const Game = require('../../classes/Game');

let validContentType = (req) => {
    return req.is("application/json");
}

let acceptJSON = (req) => {
    return req.accepts('application/json');
}

let sendJSON = (res, status, obj) => {
    res.status(status).type('application/json').json(obj).end();
}

router.post('/login', (req, res) => {
    if (Game.is) res.sendStatus(403);
    else {
        Game.newPlayer(req.body.nickname);
        sendJSON(res, 201, {is:Game.is});
    }
});

router.post('/selectedHandCard', (req, res) => {

});

router.post('/selectedFieldCard', (req, res) => {

});

router.post('/selectedDiscard', (req, res) => {

});

module.exports = router;