const { request, response } = require( 'express' );
const bcrypt = require( 'bcryptjs' );
// Models
const User = require( '../models/user.model' );

const createUser = async( req = request, res = response ) => {
	const { name, email, password } = req.body;
	
	// Create a new user
	const user = new User({ email, name, password });

	// Encrypt password
	const salt = bcrypt.genSaltSync();
	user.password = bcrypt.hashSync( password, salt )
	
	// Save to DB
	await user.save();

	res.status( 201 ).json({
		ok: true,
		user
	});
}

module.exports = {
	createUser,
}
