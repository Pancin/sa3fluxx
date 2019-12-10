/** @constructor
* @augments PlayerSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema(
    {
        roomId: { type: String, required: true },
        order: { type: Number, required: true },
        name: { type: String, default: "player_name" },
        isPlaying: { type: Boolean, default: false },
        hand: { type: Array, default: [] },
        keepers: { type: Array, default: [] },
        creepers: { type: Array, default: [] },
        canWin: { type: Boolean, default: false } // not sure if useful
    }
);

mongoose.model('Player', PlayerSchema);

module.exports = PlayerSchema;