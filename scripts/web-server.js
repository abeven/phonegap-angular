var static = require('node-static');

var fileServer = new static.Server('./app');

console.log('Listening on 8080');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(8080);