const express = require( "express" );
const cors = require( 'cors' );
const dbConnection = require("../database/config.db");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.paths = {
			auth: '/api/auth',
			events: '/api/events',
			users: '/api/users'
		}

		this.connectDB();

		this.middlewares();
		this.routes();
	}

	async connectDB() {
		await dbConnection();
	}

	middlewares() {
		this.app.use( cors() );
		this.app.use( express.json() );
	}

	routes() {
		this.app.use( this.paths.auth, require( '../routes/auth.route' ) );
		this.app.use( this.paths.events, require( '../routes/events.route' ) );
		this.app.use( this.paths.users, require( '../routes/users.route' ) );
	}

	listen() {
		this.app.listen( this.port, () => {
			console.clear();
			console.log( `Listening on port ${ this.port.green }` );
		});
	}
}

module.exports = Server;
