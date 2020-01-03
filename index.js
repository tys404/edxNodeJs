const http = require('http');
const port = 3000;

const requestHandler = function (request, response) {
    console.log('New request to: ' + request.url);
    response.end('Hello, World!');
}

var server = http.createServer(requestHandler);

server.listen(port, function () {
    console.log('listening on port ' + port);
});

console.log("Hello JSs")