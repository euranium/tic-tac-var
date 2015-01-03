/*global describe, beforeEach, module, it, inject, $controller, toBe, expect */

describe('PossListCtrl', function () {
	'use strict';
	beforeEach(module('ticApp'));
	it('should have 9 possitions with values', inject(function (controller) {
		var scope = {},
			ctrl = $controller('PossListCtrl', {$scopre: scope});
		expect(scope.poss.length).toBe(9);
	}));
});
