const { Schema, model } = require( 'mongoose' );

const EventSchema = Schema({
	title: {
		type: String,
		required: true
	},
	notes: {
		type: String,
	},
	password: {
		type: String,
		required: true
	}
});


module.exports = model( 'Event', EventSchema );

