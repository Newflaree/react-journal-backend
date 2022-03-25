const { Router } = require( 'express' );
// Controllers
const { createUser } = require('../controllers/users.controller');

const router = Router();

router.post( '/', createUser );

module.exports = router;
