var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var genreSchema = new Schema({
	'name' : String,
	'url' : String
});

module.exports = mongoose.model('genre', genreSchema);
