var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookInstancesSchema = new Schema({
	'book' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'book'
	},
	'imprint' : String,
	'status' : {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
	'due_back' : {type: Date, default: Date.now}
});

module.exports = mongoose.model('bookInstances', bookInstancesSchema);
