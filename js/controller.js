/*jslint browser: true*/
/*jslint plusplus: true */
/*global $, jQuery, angular, $scope, console, swal, checkWin*/

var TicTacController = angular.module('TicTacController', []);

TicTacController.controller('PossListCtrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';
	$http.get('js/json/classic.json').success(function (data) {
		$scope.loc = data;
	});
	$scope.moves = 0;
	$scope.win = ' ';
	$scope.winTrue = false;
	$scope.xWin = 0;
	$scope.oWin = 0;
	$scope.clearBoard = function () {
		var i;
		for (i = 0; i < 9; i++) {
			this.loc[i].value = ' ';
		}
		this.moves = 0;
		this.winTrue = false;
	};

	$scope.assignTo = function (poss) {
		if ($scope.winTrue === true) {
			return swal('Reset the board to continue playing');
		}
		if (this.loc[poss].value !== ' ') {
			return swal('you cant move there', 'that possition is taken', 'error');
		}

		if (this.moves % 2 === 0) {
			this.loc[poss].value = 'x';
		} else {
			this.loc[poss].value = 'o';
		}

		this.win = checkWin(this.loc);

		if (this.win !== ' ') {
			this.winTrue = true;
			swal('Player ' + this.win + ' has won');
			if (this.win === 'o') {
				this.oWin++;
			} else {
				this.xWin++;
			}
		} else if (this.moves === 8) {
			swal('Cats game');
		}
		return this.moves++;
	};
}]);

