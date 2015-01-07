/*global $, jQuery, angular, module, scope */

var fourSquareCtrl = angular.module('fourSquareCtrl', []);

fourSquareCtrl.controller('fourListCtrl', ['$scope', '$http', function ($scope, $http) {
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
