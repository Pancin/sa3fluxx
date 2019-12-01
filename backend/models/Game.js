/** @constructor
* @augments GameSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema(
    {
        deck: { type: Array, default: [] },
        activePlayer: { type: Number, required: true },
        players: { type: Array, default: [] },
        draw: { type: Number, required: true },
        play: { type: Number, required: true },
        playLeft: { type: Number, required: true },
        maxHand: { type: Number, required: true },
        maxKeepers: { type: Number, required: true },
        rules: { type: Array, default: [] },
        goal: {}, // definition required
        discard: { type: Array, default: [] },
        war: { type: Boolean, default: false }, //flag for goal
        tv: { type: Boolean, default: false }, //flag for goal
        silver: { type: Boolean, default: false }, //flag for goal/rule
        richBonus: { type: Boolean, default: false }, //flag for rule
        poorBonus: { type: Boolean, default: false }, //flag for rule
        noHandBonus: { type: Boolean, default: false }, //flag for rule
        firstRandom: { type: Boolean, default: false }, //flag for rule
        lastRandom: { type: Boolean, default: false }, //flag for rule
        inflation: { type: Boolean, default: false } //stretch goal
    }
);

mongoose.model('Favorites', GameSchema);

module.exports = GameSchema;