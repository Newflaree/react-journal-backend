const { request, response } = require( 'express' );
const User = require( '../models/user.model' );

const createUser = async( req = request, res = response ) => {
	const { name, email, password } = req.body;
	
	const user = new User({ email, name, password });
	await user.save();

	res.json({
		ok: true,
		user
	});
}

module.exports = {
	createUser,
}
