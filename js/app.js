/*global $, angular, console */

var ticApp = angular.module('ticApp', ['ngRoute', 'TicTacController', 'fourSquareCtrl']);

ticApp.config(['$routeProvider', function ($routeProvider) {
	'use strict';
	$routeProvider.
		when('/', {
			templateUrl: 'partials/menu.html',
			controller: 'fourListCtrl'
		})
		.when('/classic', {
			templateUrl: 'partials/tic-tac-toe.html',
			controller: 'PossListCtrl'
		})
		.when('/foursquare', {
			templateUrl: 'partials/four.html',
			controller: 'fourListCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
