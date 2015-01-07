/*global $, angular, */

var ticApp = angular.module('ticApp', ['ngRoute', 'TicTacController']);

ticApp.config(['$routeProvider', function ($routeProvider) {
	'use strict';
	$routeProvider.
		when('/', {
			templateUrl: 'partials/tic-tac-toe.html',
			controller: 'PossListCrtl'
		})
		.when('/classic', {
			templareUrl: 'partials/tic-tac-toe.html',
			controller: 'PossListCrtl'
		})
		.when('/foursquare', {
			templareUrl: 'partials/four.html',
			controller: 'fourListCtrl'
		});
}]);
