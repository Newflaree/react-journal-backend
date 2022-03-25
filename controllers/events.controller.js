const { request, response } = require( 'express' );

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

const createEvent = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'createEvent'
	});
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
