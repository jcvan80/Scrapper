var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title: {
        type: String,
        required: true

    },

    notes: {
        type: Schema.Types.ObjectId,
        ref: "notes"
    }
});

var article = mongoose.model("articles" , articleSchema);

module.exports = article;