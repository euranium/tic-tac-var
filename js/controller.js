/*jslint browser: true*/
/*jslint plusplus: true */
/*global $, jQuery, angular, $scope, console, swal, checkWin*/

var ticApp = angular.module('ticApp', ['ngRoute', 'ticApp']);

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

ticApp.controller('fourListCtrl', function ($scope, $http) {
	'use strict';
	$http.get('js/four.json').success(function (data) {
		$scope.board = data;
	});
	$scope.moves = 0;
	$scope.clearBoard = function () {
		var i;
		for (i = 0; i < 16; i++) {
			this.loc[i].value = ' ';
		}
		this.moves = 0;
	};
	$scope.boardVal = function (val) {
		if (val.x === null) {
			$scope.car = 'y';
			console.log(this.car);
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
});

ticApp.controller('PossListCtrl', function ($scope, $http) {
	'use strict';
	$http.get('js/classic.json').success(function (data) {
		$scope.loc = data;
	});
	$scope.moves = 0;
	$scope.win = ' ';
	$scope.xWin = 0;
	$scope.oWin = 0;
	$scope.clearBoard = function () {
		var i;
		for (i = 0; i < 9; i++) {
			this.loc[i].value = ' ';
		}
		this.moves = 0;
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

		this.win = checkWin(this.loc);

		if (this.win !== ' ') {
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
});
