var myApp = angular.module('myApp', ['ngRoute']);


(function(){
	myApp.config(function($routeProvider){
		$routeProvider

			.otherwise({
				redirectTo: "/"
			})
	})
}());
