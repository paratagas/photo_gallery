/**
 * Photo model schema module
 */

const mongoose = require("mongoose");
const appSettings = require('../settings');
const dbURI = appSettings.mongo.connectionString;

mongoose.connect(dbURI);

const schema = new mongoose.Schema({
    name: String,
    path: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Photo", schema);
