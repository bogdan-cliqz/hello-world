var express = require('express'),
	http = require('http'),
	app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

http.createServer(app).listen(8080);