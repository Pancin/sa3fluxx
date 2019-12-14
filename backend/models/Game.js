/** @constructor
* @augments GameSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema(
    {
        roomId: { type: String, required: true },
        deck: { type: Array, default: [] },
        activePlayer: { type: String }, //player name
        players: { type: Array, default: [] }, //array of names
        draw: { type: Number, default: 1 },
        play: { type: Number, default: 1 },
        playLeft: { type: Number, default: 1 },
        islocked: { type: Boolean, default: false }, //waiting for everybody to discard et simila
        maxHand: { type: Number },
        maxKeepers: { type: Number },
        rules: { type: Array, default: [] },
        goal: { type: String },
        discard: { typeß: Array, default: [] },
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

mongoose.model('Game', GameSchema);

module.exports = GameSchema;