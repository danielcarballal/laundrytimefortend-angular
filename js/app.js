

var laundryTimeApp = angular.module('laundryTime', ['ngRoute','ngResource']);

laundryTimeApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'residenceOverview.html',
			controller: 'overviewCtrl'
		}).
		when('/info', {
			templateUrl: 'info.html'
		}).
		when('/residence/:res', {
			templateUrl: 'residenceOverview.html',
			controller: 'overviewCtrl'
		}).
		otherwise({
			redirectto: '/home'
		})

	}
]);

console.log("Laundry time configured")