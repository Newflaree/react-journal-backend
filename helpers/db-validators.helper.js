const User = require( '../models/user.model' );

const emailValidation = async( email = '' ) => {
	const emailExists = await User.findOne({ email });
	if ( emailExists ) {
		throw new Error( 'There is already a user with that email' );
	}

	return true;
}

const eventIdValidation = async( id = '' ) => {
	const eventExists = await User.findOne({ id });
	if ( !eventExists ) {
		throw new Error( 'There are no event with that id' );
	}

	return true;
}

module.exports = {
	emailValidation,
	eventIdValidation
}
