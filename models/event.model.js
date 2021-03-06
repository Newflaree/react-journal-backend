const { Schema, model } = require( 'mongoose' );

const EventSchema = Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
	},
	start: {
		type: Date,
		required: true
	},
	end: {
		type: Date,
		required: true
	},
	status: {
		type: Boolean,
		default: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	} 
});

EventSchema.methods.toJSON = function() {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
}


module.exports = model( 'Event', EventSchema );

