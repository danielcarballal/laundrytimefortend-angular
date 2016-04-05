/* module for the prototype */
var basicApp = angular.module('basicApp', ['ngRoute','ngResource']);

/* SetUp our own routes */
basicApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html'
    }).
      when('/residence/farsta', {
        templateUrl: 'templates/residenceOverview.html'
    }).
      otherwise({
    	redirectTo: '/home'
	});
  }]);