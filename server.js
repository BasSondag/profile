
var express = require('express');
var fs = require('fs');
var https = require('https');
var path = require('path');
var bodyParser = require('body-parser');


var credentials = {
      cert: fs.readFileSync('/etc/letsencrypt/live/name-of-your-site/cert.pem'),
      key: fs.readFileSync('/etc/letsencrypt/live/name-of-your-site/privkey.pem')
    };

var app = express();


app.use(express.static(path.join(__dirname ,'/client')));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');




// mongoose.connect('mongodb://localhost/mongoose_dashboard');

//model
// require('./server/config/mongoose.js')


require('./server/config/routes.js')(app);



var server = https.createServer(credentials, app)

server.listen(8000, function(){
	console.log('welcome to my portofolio on 8000')
})
