/** @constructor
* @augments PlayerSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema(
    {
        order: { type: Number, required: true },
        name: { type: String, default: "player_name" },
        isPlaying: { type: Boolean, default: false },
        hand: { type: Array, default: [] },
        keepers: { type: Array, default: [] },
        creepers: { type: Array, default: [] },
        canWin: { type: Boolean, default: true }
    }
);

mongoose.model('Favorites', PlayerSchema);

module.exports = PlayerSchema;