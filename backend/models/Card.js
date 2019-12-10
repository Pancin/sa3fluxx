/** @constructor
* @augments CardSchemaInstance
* @param {Object} definition
*/
const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        filename: { type: String, required: true },
        dataURL: { type: String, required: true },
        description: { type: String, default: ""},
        type: { type: String, required: true }
    }
);

mongoose.model('Card', CardSchema);

module.exports = CardSchema;