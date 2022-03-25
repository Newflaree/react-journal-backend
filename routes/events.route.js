const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Middlewares
const { validateFields, validateJWT } = require('../middlewares');
// Helpers
const { isDate, eventIdValidation } = require('../helpers');
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

router.get( '/', [
	validateJWT,
	validateFields
], getEvents );

router.get( '/:id', [
	validateJWT,
	check( 'id', 'Is not a Mongo id' ).isMongoId(),
	check( 'id' ).custom( eventIdValidation ),
	validateFields
], getEvent );

router.post( '/', [
	validateJWT,
	check( 'title', 'The title is mandatory' ).not().isEmpty(),
	check( 'start', 'Start date is mandatory' ).custom( isDate ),
	check( 'end', 'End date is mandatory' ).custom( isDate ),
	validateFields
], createEvent );

router.put( '/:id', [
	validateJWT,
	check( 'title', 'The title is mandatory' ).not().isEmpty(),
	check( 'start', 'Start date is mandatory' ).custom( isDate ),
	check( 'end', 'End date is mandatory' ).custom( isDate ),
	check( 'id', 'Is not a Mongo id' ).isMongoId(),
	check( 'id' ).custom( eventIdValidation ),
	validateFields
], updateEvent );

router.delete( '/:id', [
	validateJWT,
	check( 'id', 'Is not a Mongo id' ).isMongoId(),
	check( 'id' ).custom( eventIdValidation ),
	validateFields
], deleteEvent );

module.exports = router;
