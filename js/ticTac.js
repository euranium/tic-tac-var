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
	var i;
	for (i = 1; i < this.length; i++) {
		if (this[i].x !== this[0].x) {
			return false;
		}
	}
};

function checkFourWin(board) {
	'use strict';
	return '';
}

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


