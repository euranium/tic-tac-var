/*global $, angular, */

var mainApp = angular.module('ticApp', ['ngRoute']);

mainApp.config(function ($routeProvider) {
	'use strict';
	$routeProvider.
		when('/', {
			templateUrl: 'partials/tic-tac-toe.html',
			controller: 'PossListCrtl'
		});
});
