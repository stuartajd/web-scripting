var http = require('http');
var url = require('url');
var server = http.createServer(
    function (request, response) {
        var parsedUrl = url.parse(request.url, true);
        if (parsedUrl.pathname == '/add') {
            response.setHeader("Content-Type", "text/plain");
	    parsedUrl.query.a = parseFloat(parsedUrl.query.a);
	    parsedUrl.query.b = parseFloat(parsedUrl.query.b);
	    response.end((parsedUrl.query.a + parsedUrl.query.b).toString());
        } else {
            response.statusCode = 404;
            response.end('Not found!\n');
        } 
    }
);
server.listen(8080);