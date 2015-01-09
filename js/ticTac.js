/*global $, jQuery, angular, $scope, console, swal, checkWin*/
/*jslint plusplus: true*/

Array.prototype.allSame = function () {
	'use strict';
	var i;
	for (i = 1; i < this.length; i++) {
        if (this[i] !== this[0]) {
			return false;
		}
    }

    return true;
};
Array.prototype.allSameX = function () {
	'use strict';
	var i, n;
	n = 0;
	for (i = 1; i < this.length; i++) {
		if (this[i].x !== this[0].x) {
			i = 100;
		}
	}
	if (i < 50) {
		return 'x';
	}
	for (i = 1; i < this.length; i++) {
		if (this[i].cap !== this[0].cap) {
			i = 100;
		}
	}
	if (i < 100) {
		return 'cap';
	}
	for (i = 1; i < this.length; i++) {
		if (this[i].italic !== this[0].italic) {
			i = 100;
		}
	}
	if (i < 100) {
		return 'italic';
	}
	for (i = 1; i < this.length; i++) {
		if (this[i].black !== this[0].black) {
			i = 100;
		}
	}
	if (i < 100) {
		return 'black';
	}
	return '';
};

function setItal(poss) {
	'use strict';
	poss = '#' + poss;
	$(poss).attr('style', 'font-style:italic; font-family: Georgia');
}

function setCol(poss) {
	'use strict';
	poss = '#' + poss;
	$(poss).attr('style', 'color:orange;');
}

function setColItal(poss) {
	'use strict';
	poss = '#' + poss;
	$(poss).attr('style', 'color:orange; font-style:italic; font-family: Georgia');
}

function checkFourWin(table) {
	/*  0  | 1  | 2  | 3
	 * ------------------
	 *  4  | 5  | 6  | 7
	 * ------------------
	 *  8  | 9  | 10 | 11
	 * ------------------
	 *  12 | 13 | 14 | 15
	 * the board possitions
	 */
	'use strict';
	var set = [table[0], table[1], table[2], table[3]];
	if ((table[0].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[0], table[4], table[8], table[12]];
	if ((table[0].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[0], table[5], table[10], table[15]];
	if ((table[0].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[4], table[5], table[6], table[7]];
	if ((table[4].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[8], table[9], table[10], table[11]];
	if ((table[8].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[12], table[13], table[14], table[15]];
	if ((table[12].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[3], table[6], table[9], table[12]];
	if ((table[3].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[1], table[5], table[9], table[13]];
	if ((table[1].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[2], table[6], table[10], table[14]];
	if ((table[2].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	set = [table[3], table[7], table[11], table[15]];
	if ((table[3].x !== null) && (set.allSameX() !== '')) {
		return set.allSameX();
	}
	return false;
}

function checkWin(table) {
	/* 0 | 1 | 2
	 * ---------
	 * 3 | 4 | 5
	 * ---------
	 * 6 | 7 | 8
	 * the board possitions
	 */
	'use strict';
	var set = [table[0].value, table[1].value, table[2].value];
	if ((table[0].value !== ' ') &&  (set.allSame() === true)) {
		return table[0].value;
	}
	set = [table[0].value, table[3].value, table[6].value];
	if ((table[0].value !== ' ') &&  (set.allSame() === true)) {
		return table[0].value;
	}
	set = [table[0].value, table[4].value, table[8].value];
	if ((table[0].value !== ' ') &&  (set.allSame() === true)) {
		return table[0].value;
	}
	set = [table[1].value, table[4].value, table[7].value];
	if ((table[1].value !== ' ') &&  (set.allSame() === true)) {
		return table[1].value;
	}
	set = [table[2].value, table[5].value, table[8].value];
	if ((table[2].value !== ' ') &&  (set.allSame() === true)) {
		return table[2].value;
	}
	set = [table[2].value, table[4].value, table[6].value];
	if ((table[2].value !== ' ') &&  (set.allSame() === true)) {
		return table[2];
	}
	set = [table[3].value, table[4].value, table[5].value];
	if ((table[3].value !== ' ') &&  (set.allSame() === true)) {
		return table[3].value;
	}
	set = [table[6].value, table[7].value, table[8].value];
	if ((table[6].value !== ' ') &&  (set.allSame() === true)) {
		return table[6].value;
	}
	return ' ';
}


