/*jslint plusplus: true*/
/*global $, jQuery, angular, module, scope, swal, setItal, console, checkFourWin, setCol, setColItal, resetCurrent, hide, setNorm */

var fourSquareCtrl = angular.module('fourSquareCtrl', []);

fourSquareCtrl.controller('fourListCtrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';
	$http.get('js/json/four.json').success(function (data) {
		$scope.board = data;
		$scope.replaceBoard = data;
	});
	$scope.moves = 0;
	$scope.currentPiece = '';
	$scope.win = false;
	$scope.getPiece = function (pos) {
		if (this.win === false) {
			// cannot selct a piece to place if game over
			$scope.currentPiece = this.board.filled[pos];
			this.currentPiece.current = 'current';
		} else {
			swal('game over, please reset to continue playing');
		}
	};
	$scope.setPiece = function (pos) {
		if (this.win === true) {
			// if the game has been won the
			// board needs to be reset
			return swal('game over, please reset to continue playing');
		}
		if ($scope.currentPiece === '') {
			// if there is no piece selected to place
			// the player needs to select one
			return swal('Please select a piece to place first');
		}
		var temp;
		// hide the displayed piece at the bot of 
		// the board
		hide(this.currentPiece.pos);
		temp = this.board.start[pos].pos;
		this.board.start[pos] = this.currentPiece;
		this.board.start[pos].pos = temp;
		this.win = checkFourWin(this.board.start);
		if (this.win !== false) {
			this.win = true;
			return swal('game over');
		}
		this.currentPiece = '';
		return;
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
		var temp = val.pos;
		if (val.current !== undefined) {
			val.pos = 'current';
			resetCurrent();
		}
		if (val.x === true) {
			$scope.car = 'x';
		} else {
			$scope.car = 'j';
		}
		if (val.cap === true) {
			$scope.car = $scope.car.toUpperCase();
		}
		if ((val.italic === true) && (val.black === true)) {
			setItal(val.pos);
		} else if ((val.black === false) && (val.italic === false)) {
			setCol(val.pos);
		} else if ((val.black === false) && (val.italic === true)) {
			setColItal(val.pos);
		} else if ((val.black === true) && (val.italic === false)) {
			setNorm(val.pos);
		}
		val.pos = temp;
		val.current = undefined;
		return $scope.car;
	};
}]);
