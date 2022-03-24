const express = require( "express" );
 

class Server {
	constructor() {
		this.app = express();
		this.port = 2000;
	}

	listen() {
		this.app.listen( this.port, () => {
			console.clear();
			console.log( `Listening on port ${ this.port }` );
		});
	}
}

module.exports = Server;

