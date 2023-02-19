const mongoose = require("mongoose");

const goalSchame = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Plz add a text value"]
    }
}, { timestamps: true, }

);

const Goal = mongoose.model("goals", goalSchame)

module.exports = { Goal }