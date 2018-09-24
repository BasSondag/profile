
var express = require('express');
var fs = require('fs');
var http = require('http')
var https = require('https');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var cert = fs.readFileSync('/etc/letsencrypt/live/bassondag.com/cert.pem', 'utf8');
var ca = fs.readFileSync('/etc/letsencrypt/live/bassondag.com/chain.pem', 'utf8');
var key = fs.readFileSync('/etc/letsencrypt/live/bassondag.com/privkey.pem', 'utf8');

var credentials = {
      cert: cert,
      key: key,
      ca: ca
    };


app.use(express.static(path.join(__dirname ,'/client')));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
