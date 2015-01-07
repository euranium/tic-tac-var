/*global $, angular, console */

var ticApp = angular.module('ticApp', ['ngRoute', 'TicTacController']);
ticApp.config(['$routeProvider', function ($routeProvider) {
	'use strict';
	console.log('here');
	$routeProvider.
		when('/', {
			templateUrl: 'partials/menu.html',
			controller: 'fourListCtrl'
		})
		.when('/classic', {
			templareUrl: 'partials/tic-tac-toe.html',
			controller: 'PossListCtrl'
		})
		.when('/foursquare', {
			templareUrl: 'partials/four.html',
			controller: 'fourListCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
