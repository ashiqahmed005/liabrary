var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var authorSchema = new Schema({
	'first_name' : {type: String, required: true, max: 60},
	'family_name' : {type: String, required: true, max: 60},
	'date_of_birth' : Date,
	'date_of_death' : Date
});

module.exports = mongoose.model('author', authorSchema);
