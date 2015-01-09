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
	$scope.win = false;
	$scope.getPiece = function (pos) {
		if (this.win === false) {
			$scope.currentPiece = this.board.filled[pos];
		} else {
			swal('game over, please reset to continue playing');
		}
	};
	$scope.setPiece = function (pos) {
		if (this.win === true) {
			return swal('game over, please reset to continue playing');
		}
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
		if (this.win !== false) {
			this.win = true;
			return swal('game over');
		}
		this.currentPiece = '';
	};
	$scope.clearBoard = function () {
		$http.get('js/json/four.json').success(function (data) {
			$scope.board = data;
			$scope.win = false;
			$scope.currentPiece = '';
			var i, n;
			for (i = 0; i < 16; i++) {
				n = '#0' + i;
				$(n).show();
			}
		});
		return (this.moves = 0);
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
