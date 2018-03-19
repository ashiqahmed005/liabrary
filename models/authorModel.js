var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var authorSchema = new Schema({
	'first_name' : String,
	'family_name' : String,
	'date_of_birth' : Date,
	'date_of_death' : Date
});

module.exports = mongoose.model('author', authorSchema);
