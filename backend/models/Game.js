/** @constructor
* @augments GameSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema(
    {
        activePlayer: { type: Number, required: true },
        players: { type: Array, default: [] },
        draw: { type: Number, required: true },
        play: { type: Number, required: true },
        maxHand: { type: Number, required: true },
        maxKeepers: { type: Number, required: true },
        rules: { type: Array, default: [] },
        goal: {}, // definition required
        discard: { type: Array, default: [] },
        war: { type: Boolean, default: false }, //flag for goal
        tv: { type: Boolean, default: false }, //flag for goal
        inflation: { type: Boolean, default: false }
    }
);

mongoose.model('Favorites', GameSchema);

module.exports = GameSchema;