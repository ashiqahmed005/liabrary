var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookInstancesSchema = new Schema({
	'book' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'book'
	},
	'imprint' : String,
	'status' : String,
	'due_back' : Date
});

module.exports = mongoose.model('bookInstances', bookInstancesSchema);
