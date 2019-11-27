/** @constructor
* @augments DeckSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const DeckSchema = new mongoose.Schema(
    {
        cards: { type: Array, default: [] },
        size: { type: Number, required: true },
    }
);

mongoose.model('Favorites', DeckSchema);

module.exports = DeckSchema;