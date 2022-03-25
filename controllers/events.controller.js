const { request, response } = require( 'express' );
// Models
const Event = require( '../models/event.model' );

const getEvents = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'getEvents'
	});
}

const getEvent = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'getEvent'
	});
}

const createEvent = async( req = request, res = response ) => {
	const event = new Event( req.body )
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
