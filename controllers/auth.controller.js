const { request, response } = require( 'express' );
const bcrypt = require( 'bcryptjs' );
// Models
const User = require( '../models/user.model' );


const register = async( req = request, res = response ) => {
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

const login = async( req = request, res = response ) => {
	const { email, password } = req.body;
	try {
		// Check if email exists
		const user = await User.findOne({ email });
		if ( !user ) {
			return res.status( 401 ).json({
				ok: false,
				msg: 'Incorrect email or password' 
			});
		}

		// Check password
		const validPassword = bcrypt.compareSync( password, user.password );
		if ( !validPassword ) {
			return res.status( 401 ).json({
				ok: false,
				msg: 'Incorrect email or password' 
			});
		}

		res.json({
			ok: true,
			user
		});

	} catch( err ) {
		console.log( err );
		return res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the Administrator'
		});
	}
}

module.exports = {
	login,
	register
}
