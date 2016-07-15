var myApp = angular.module('myApp', ['ngRoute']);


(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/lunchbuddys',{
				controller: 'project1Controller',
				templateUrl: "client/views/lunchbuddys.html"
			})
			.when('/products',{
				controller: 'productsController',
				templateUrl: "partials/orders/index.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());