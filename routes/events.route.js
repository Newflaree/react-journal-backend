const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
const {
	getEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent
} = require('../controllers/events.controller');
// Middlewares
const validateFields = require('../middlewares/validate-fields.middleware');
// Helpers
// Controllers

const router = Router();

router.get( '/', getEvents );
router.get( '/:id', getEvent );
router.post( '/', createEvent );
router.put( '/:id', updateEvent );
router.delete( '/:id', deleteEvent );

module.exports = router;
