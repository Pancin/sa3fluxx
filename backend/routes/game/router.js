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

router.put('/card', (req,res) => {
    
});