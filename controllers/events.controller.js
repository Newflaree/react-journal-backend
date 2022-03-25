const { request, response } = require( 'express' );
// Models
const Event = require( '../models/event.model' );

const getEvents = async( req = request, res = response ) => {
	try {
		const [ total, events ] = await Promise.all([
			Event.countDocuments(),
			Event.find().populate( 'user', 'name' )
		]);

		res.json({
			ok: true,
			total,
			events
		});

	} catch( err ) {
		console.log( err );
		res.status( 500 ).json({
			ok: false,
			msg: 'Talk to the administrator'
		});
	}
}

const getEvent = async( req = request, res = response ) => {
	const { id } = req.params;

	try {
		const event = await Event.findById( id );

		res.json({
			ok: true,
			event
		});

	} catch( err ) {
		console.log( err );
		res.status( 500 ).json({
			ok: false,
			msg: 'Talk to the administrator'
		});
	}
}

const createEvent = async( req = request, res = response ) => {
	const event = new Event( req.body );
	try {
		event.user = req.uid;
		const saveEvent = await event.save();

		res.json({
			ok: true,
			saveEvent
		});

	} catch( err ) {
		console.log( err );
		res.status( 500 ).json({
			ok: false,
			msg: 'Talk to the administrator'
		});
	}
}

const updateEvent = async( req = request, res = response ) => {
	const { id } = req.params;
	const { _id, status, ...rest } = req.body;

	try {
		const event = await Event.findByIdAndUpdate( id, rest, { new: true })

		res.json({
			ok: true,
			event
		});

	} catch( err ) {
		console.log( err );
		res.status( 500 ).json({
			ok: false,
			msg: 'Talk to the administrator'
		});
	}
}

const deleteEvent = ( req = request, res = response ) => {
	try {
		res.json({
			ok: true,
			msg: 'deleteEvent'
		});

	} catch( err ) {
		console.log( err );
		res.status( 500 ).json({
			ok: false,
			msg: 'Talk to the administrator'
		});
	}
}

module.exports = {
	getEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent
}
