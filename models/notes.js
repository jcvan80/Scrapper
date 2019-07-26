var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var notesSchema = new Schema ({
   title: String,
   body: String
});

var note = mongoose.model("notes" , notesSchema);

module.exports = notes