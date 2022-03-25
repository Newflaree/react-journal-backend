const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Middlewares
const validateFields = require('../middlewares/validate-fields.middleware');
// Helpers
const {isDate} = require('../helpers/date-validator.helper');
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
	check( 'title', 'The title is mandatory' ).not().isEmpty(),
	check( 'start', 'Start date is mandatory' ).custom( isDate ),
	check( 'end', 'End date is mandatory' ).custom( isDate ),
	validateFields
], createEvent );

router.put( '/:id', updateEvent );
router.delete( '/:id', deleteEvent );

module.exports = router;
