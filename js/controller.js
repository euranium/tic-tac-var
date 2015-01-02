/*jslint browser: true*/
/*global $, jQuery, angular*/

var ticApp = angular.module('ticApp', []);

ticApp.controller('PossListCtrl', function ($scope) {
	'use strict';
	$scope.poss = [
		{'poss': 0,
			'value': 'x'},
		{'poss': 1,
			'value': 'x'},
		{'poss': 2,
			'value': 'x'},
		{'poss': 3,
			'value': 'x'},
		{'poss': 4,
			'value': 'x'},
		{'poss': 5,
			'value': 'x'},
		{'poss': 6,
			'value': 'x'},
		{'poss': 7,
			'value': 'x'},
		{'poss': 8,
			'value': 'x'}
	];
});
