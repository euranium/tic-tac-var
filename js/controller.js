/*jslint browser: true*/
/*jslint plusplus: true */
/*global $, jQuery, angular, $scope, console, swal, checkWin*/

var TicTacController = angular.module('TicTacController', []);
/*
ticApp.config(function ($routeProvider) {
	'use strict';
	$routeProvider.
		when('/', {
			templateUrl: 'partials/menu.html',
			controller: 'PossListCtrl'
		}).
		when('/foursquare', {
			templateUrl: 'partials/four.html',
			controller: 'fourListCtrl'
		}).
		when('/classic', {
			templateUrl: 'partials/tic-tac-toe.html',
			controller: 'PossListCtrl'
		});
});

TicTacController.controller('fourListCtrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';
	$http.get('js/json/four.json').success(function (data) {
		$scope.board = data;
	});
	$scope.moves = 0;
	$scope.message = 'here';
	$scope.clearBoard = function () {
		var i;
		for (i = 0; i < 16; i++) {
			this.loc[i].value = ' ';
		}
		this.moves = 0;
	};
	$scope.boardVal = function (val) {
		if (val === null) {
			return ' ';
		}
		if (val.x === null) {
			return this.car;
		}
		if (val.x === true) {
			$scope.car = 'x';
		} else {
			$scope.car = 'o';
		}
		if (val.cap === true) {
			$scope.car = $scope.car.toUpperCase();
		}
		return $scope.car;
	};
}]);
*/
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
