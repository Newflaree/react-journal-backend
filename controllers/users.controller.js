const { request, response } = require( 'express' );

const createUser = async( req = request, res = response ) => {
	const { name, email, password } = req.body;

	res.json({
		ok: true,
		user: {
			name,
			email,
			password
		}
	});
}

module.exports = {
	createUser,
}
