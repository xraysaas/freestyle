let http = require( 'http' );

let server = http.createServer( function( request, response ) {
	response.writeHead( 200, { 'Content-Type': 'text/plain' } );
	response.end( 'Hello World in a test branch!' );
} );

let port = 80;
server.listen( port );

console.log( 'Server running at http://localhost:%d', port );
