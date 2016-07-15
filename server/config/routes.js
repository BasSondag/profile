module.exports = function(app){



	//root
	app.get('/', function(req, res ){
		console.log("index profile")
		res.render("index")
	});



}	