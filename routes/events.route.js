const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Middlewares
const { validateFields, validateJWT } = require('../middlewares');
// Helpers
const { isDate } = require('../helpers');
// Controllers
const {
	getEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent
} = require('../controllers/events.controller');


/*
 *	PATH: /api/events
 */
const router = Router();

router.get( '/', getEvents );
router.get( '/:id', getEvent );

router.post( '/', [
	validateJWT,
	check( 'title', 'The title is mandatory' ).not().isEmpty(),
	check( 'start', 'Start date is mandatory' ).custom( isDate ),
	check( 'end', 'End date is mandatory' ).custom( isDate ),
	validateFields
], createEvent );

router.put( '/:id', updateEvent );
router.delete( '/:id', deleteEvent );

module.exports = router;
