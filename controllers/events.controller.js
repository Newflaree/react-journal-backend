const { request, response } = require( 'express' );
// Models
const Event = require( '../models/event.model' );

const getEvents = async( req = request, res = response ) => {
	const [ total, events ] = await Promise.all([
		Event.countDocuments(),
		Event.find().populate( 'user', 'name' )
	]);

	res.json({
		ok: true,
		total,
		events
	});
}

const getEvent = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'getEvent'
	});
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

const updateEvent = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'updateEvent'
	});
}

const deleteEvent = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'deleteEvent'
	});
}

module.exports = {
	getEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent
}
