const { request, response } = require( 'express' );
// Models
const Event = require( '../models/event.model' );

const getEvents = async( req = request, res = response ) => {
	const query = { status: true };
	try {
		const [ total, events ] = await Promise.all([
			Event.countDocuments( query ),
			Event.find( query ).populate( 'user', 'name' )
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
		if ( !event.status ) {
			return res.status( 400 ).json({
				ok: false,
				msg: 'There are no event with that id'
			});
		}

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

const deleteEvent = async( req = request, res = response ) => {
	const { id } = req.params;
	const query = { status: false };

	try {
		const event = await Event.findByIdAndUpdate( id, query, { new: true } );

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

module.exports = {
	getEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent
}
