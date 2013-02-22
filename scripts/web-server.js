var connect = require('connect');
var less = require('less-middleware');

console.log('Listening on 8080');

connect.createServer(
  less({
      src: __dirname + '/../app/',
	  compress:false
  }),
  connect.static('./app')
).listen(8080);