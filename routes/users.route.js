const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Middlewares
const validateFields = require('../middlewares/validate-fields.middleware');
// Helpers
const { emailValidation } = require('../helpers/db-validators.helper');
// Controllers
const { createUser } = require('../controllers/users.controller');

const router = Router();

router.post( '/', [
	check( 'name', 'The name is mandatory' ).not().isEmpty(),
	check( 'password', 'Password must be longer than 6 characters' ).isLength({ min: 6 }),
	check( 'email', 'The email is mandatory' ).isEmail(),
	check( 'email' ).custom( emailValidation ),
	validateFields
], createUser );

module.exports = router;
