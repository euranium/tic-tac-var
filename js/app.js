/*global $, angular, */

var ticApp = angular.module('ticApp', ['ngRoute', 'PossListCrtl', 'fourListCtrl']);

ticApp.config(function ($routeProvider) {
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
			templareUrl: 'partials/tic-tac-toe.html',
			controller: 'fourListCtrl'
		});
});
