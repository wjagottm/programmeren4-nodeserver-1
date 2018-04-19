//
// server.js
//
let http = require('http');

const port = process.env.PORT || 3000;

http.createServer(function (request, response){
	console.log('Er was een request');
	response.writeHead(200, {'Content-Type': 'application/json'});
	let result = {
		firstname: 'Robin',
		lastname: "Schellius"
	};
	response.write(JSON.stringify(result));
	response.end();
}).listen(port);

console.log('De server luistert op port ' + port);