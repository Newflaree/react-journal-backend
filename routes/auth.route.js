const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Middlewares
const { validateFields } = require('../middlewares');
// Helpers
const { emailValidation } = require('../helpers');
// Controllers
const { login, register } = require('../controllers/auth.controller');

const router = Router();

router.post( '/', [
	check( 'name', 'The name is mandatory' ).not().isEmpty(),
	check( 'password', 'Password must be longer than 6 characters' ).isLength({ min: 6 }),
	check( 'email', 'The email is mandatory' ).isEmail(),
	check( 'email' ).custom( emailValidation ),
	validateFields
], register );

router.post( '/login', [
	check( 'email', 'The email is mandatory' ).isEmail(),
	check( 'password', 'The password is mandatory' ).not().isEmpty(),
	validateFields
], login );

module.exports = router;
