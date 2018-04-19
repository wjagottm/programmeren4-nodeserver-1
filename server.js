//
// server.js
//
let http = require('http');

http.createServer(function (request, response){
	console.log('Er was een request');
	response.writeHead(200, {'Content-Type': 'application/json'});
	let result = {
		firstname: 'Robin',
		lastname: "Schellius"
	};
	response.write(JSON.stringify(result));
	response.end();
}).listen(3000);

console.log('De server luistert op port 3000');