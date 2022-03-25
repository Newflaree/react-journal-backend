const { Router } = require( 'express' );
// Controllers
const { getUsers } = require('../controllers/users.controller');

const router = Router();

router.get( '/', getUsers );

module.exports = router;
