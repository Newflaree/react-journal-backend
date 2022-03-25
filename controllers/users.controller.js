const { request, response } = require( 'express' );

const getUsers = ( req = request, res = response ) => {
	res.json({
		ok: true,
		msg: 'getUsers'
	});
}

module.exports = {
	getUsers
}
