var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('Received' + pathname + 'request.');

	var routes = {
		'/': function(request, response) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.write('Hello World');
			response.end();
		},
		'/abc': function(request, response) {
			response.writeHead(200, {'Content-Type':'application/json'});
			response.write(JSON.stringify({data:'test'}));
			response.end();
		}
	};

	if (typeof routes[pathname] === 'function') {
		routes[pathname](request, response);
	} else {
			response.writeHead(404);
			response.write('404 not found');
			response.end();
	}


}).listen(3000);
