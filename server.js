var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname ,'/client')));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
 // mongoose.connect('mongodb://localhost/mongoose_dashboard');
 //model
// require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
app.listen(8000, function(){
	console.log('welcome to my portofolio on 8000')
})
