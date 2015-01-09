/*jslint plusplus: true*/
/*global $, jQuery, angular, module, scope, swal, setItal, console, checkFourWin, setCol, setColItal */

var fourSquareCtrl = angular.module('fourSquareCtrl', []);

fourSquareCtrl.controller('fourListCtrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';
	$http.get('js/json/four.json').success(function (data) {
		$scope.board = data;
	});
	$scope.moves = 0;
	$scope.currentPiece = '';
	$scope.win = '';
	$scope.getPiece = function (pos) {
		$scope.currentPiece = this.board.filled[pos];
	};
	$scope.setPiece = function (pos) {
		if ($scope.currentPiece === '') {
			return swal('Please select a piece to place first');
		}
		var temp, piece;
		piece = '#' + this.currentPiece.pos;
		$(piece).hide();
		temp = this.board.start[pos].pos;
		this.board.start[pos] = this.currentPiece;
		this.board.start[pos].pos = temp;
		this.win = checkFourWin(this.board.start);
		this.currentPiece = '';
	};
	$scope.clearBoard = function () {
		$http.get('js/json/four.json').success(function (data) {
			$scope.board = data;
			var i, n;
			for (i = 0; i < this.board.length; i++) {
				n = '#' + this.board.filled[i].pos;
				$(n).show();
			}
		});
		console.log('here');
		this.moves = 0;
	};
	$scope.boardVal = function (val) {
		if (!val) {
			return ' ';
		}
		if (val.x === null) {
			return ' ';
		}
		if (val.x === true) {
			$scope.car = 'x';
		} else {
			$scope.car = 'y';
		}
		if (val.cap === true) {
			$scope.car = $scope.car.toUpperCase();
		}
		if ((val.italic === true) && (val.black === true)) {
			setItal(val.pos);
		}
		if ((val.black === false) && (val.italic === false)) {
			setCol(val.pos);
		}
		if ((val.black === false) && (val.italic === true)) {
			setColItal(val.pos);
		}
		return $scope.car;
	};
}]);
