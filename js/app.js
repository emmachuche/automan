var myapp = angular.module('automate', ["ngRoute"]);

myapp.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl:"templates/home.html"
		})
		.when("/automate",{
			templateUrl: "templates/automates.html",
			controller: "controllerAutomate"
		})
		.when('/404',{
			templateUrl: 'templates/404.html'
		})
		.otherwise({
			redirectTo:'/404'
		})
});


