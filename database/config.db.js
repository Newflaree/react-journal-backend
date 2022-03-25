const mongoose = require( 'mongoose' );

// Connect to MongoDB
const dbConnection = async() => {
	try {
		await mongoose.connect( process.env.MONGO_CNN );
		console.log( 'Database ONLINE'.green )

	} catch( err ) {
		console.log( err );
		throw new Error( 'Could not connect to database'.red );
	}
}

module.exports = dbConnection;
