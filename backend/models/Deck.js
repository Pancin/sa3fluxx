/** @constructor
* @augments DeckSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const DeckSchema = new mongoose.Schema(
    {
        size: { type: Number, required: true },
        cards: { type: Array, default: [] },
    }
);

mongoose.model('Deck', DeckSchema);

module.exports = DeckSchema;