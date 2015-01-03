/*jslint browser: true*/
/*jslint plusplus: true */
/*global $, jQuery, angular, $scope, console, swal, checkWin*/
var ticApp = angular.module('ticApp', []);

ticApp.controller('PossListCtrl', function ($scope) {
	'use strict';
	$scope.loc = [
		{'poss': 0,
			'row': 0,
			'col': 0,
			'value': ' '},
		{'poss': 1,
			'row': 0,
			'col': 1,
			'value': ' '},
		{'poss': 2,
			'row': 0,
			'col': 2,
			'value': ' '},
		{'poss': 3,
			'row': 1,
			'col': 0,
			'value': ' '},
		{'poss': 4,
			'row': 1,
			'col': 1,
			'value': ' '},
		{'poss': 5,
			'row': 1,
			'col': 2,
			'value': ' '},
		{'poss': 6,
			'row': 2,
			'col': 0,
			'value': ' '},
		{'poss': 7,
			'row': 2,
			'col': 1,
			'value': ' '},
		{'poss': 8,
			'row': 2,
			'col': 2,
			'value': ' '}
	];
	$scope.moves = 0;
	$scope.win = ' ';
	$scope.clearBoard = function () {
		var i;
		for (i = 0; i < 8; i++) {
			this.loc[i].value = ' ';
		}
	};

	$scope.assignTo = function (poss) {
		if (this.loc[poss].value !== ' ') {
			return swal('you cant move there', 'that possition is taken', 'error');
		}
		if (this.moves % 2 === 0) {
			this.loc[poss].value = 'x';
		} else {
			this.loc[poss].value = 'o';
		}
		var clearBoard = this.clearBoard;
		this.win = checkWin(this.loc);
		if (this.win !== ' ') {
			swal({
				title: this.win + ' has won',
				text: 'do you want to play again?',
				type: 'success',
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false,
				closeOnCancel: false
			}, function (isConfirm) {
				if (isConfirm) {
					$clearBoard;
				} else {
					return;
				}
			});
		}
		return this.moves++;
	};
});


