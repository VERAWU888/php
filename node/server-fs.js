var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	var qs = querystring.parse(url.parse(request.url).query);
	console.log('Received' + pathname + 'request.');

	var routes = {
		'/': function(request, response) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.write('Hello World');
			response.end();
		},
		'/abc': function(request, response) {
			var type = 'text/plain';
			var output = 'test';

		if (typeof qs.format !== 'undefined' && qs.format === 'json') {
				type = 'application/json';
				output = JSON.stringify({data:'test'});
		} else if (typeof qs.format !== 'undefined' && qs.format === 'html') {
			var html = fs.readFileSync()
			type = 'text/html';
			output = html;

		}


			response.writeHead(200, {'Content-Type':type});
			response.write(output);
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
