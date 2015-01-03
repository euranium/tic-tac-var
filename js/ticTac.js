/*global $, jQuery, angular, $scope, console, swal, checkWin*/

Array.prototype.allSame = function () {
	'use strict';
	for(var i = 1; i < this.length; i++){
        if(this[i] !== this[0])
            return false;
    }

    return true;
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
	var set = [table[0].value, table[1].value, table[2].value]
	if ((table[0].value !== ' ') &&  (set.allSame() === true)){
		return table[0].value;
	}
	set = [table[0].value, table[3].value, table[6].value]
	if ((table[0].value !== ' ') &&  (set.allSame() ===true)){
		return table[0].value;
	}
	set = [table[0].value, table[4].value, table[8].value]
	if ((table[0].value !== ' ') &&  (set.allSame() === true)){
		return table[0].value;
	}
	set = [table[1].value, table[4].value, table[7].value]
	if ((table[1].value !== ' ') &&  (set.allSame() === true)){
		return table[1].value;
	} 
	set = [table[2].value, table[5].value, table[8].value]
	if ((table[2].value !== ' ') &&  (set.allSame() === true)){
		return table[2].value;
	} 
	set = [table[2].value, table[4].value, table[6].value]
	if ((table[2].value !== ' ') &&  (set.allSame() === true)){
		return table[2];
	} 
	set = [table[3].value, table[4].value, table[5].value]
	if ((table[3].value !== ' ') &&  (set.allSame() === true)){
		return table[0].value;
	} 
	set = [table[6].value, table[7].value, table[8].value]
	if ((table[6].value !== ' ') &&  (set.allSame() === true)){
		return table[6].value;
	} 
	return ' ';
}


