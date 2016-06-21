'use strict';
var assert = require('assert');
var validate = require('./');

it('should return false for `isValid` and with a `message` for invalid names', function () {
	assert(!validate('').isValid);
	assert(!validate('foo').isValid);
	assert(!validate('annotation-xml').isValid);
	assert(!validate('0-foo').isValid);
	assert(!validate('-foo').isValid);
	assert(!validate('foo-$').isValid);
	assert(!validate('foo-/').isValid);
	assert(!validate('FOO-BAR').isValid);
	assert(!validate('foo/').isValid);
	assert(validate('foo/').message);
});

it('should return true for `isValid` and without `message` for valid names', function () {
	assert(validate('foo-bar').isValid);
	assert(!validate('foo-bar').message);
	assert(validate('não-tém').isValid);
	assert(validate('foo-bÅr').isValid);
	assert(validate('a-aAA'));
	assert(validate('a-A'));
});

it('should return true for `isValid` with warnings for not recommended names', function () {
	assert(validate('polymer-').isValid);
	assert(validate('polymer-').message);
	assert(validate('x-').isValid);
	assert(validate('ng-').isValid);
	assert(validate('unicorn-').isValid);
	assert(validate('unicorn-').message);
	assert(validate('unicorn-ø').message);
	assert(validate('uni--corn').message);
	assert(validate('uni-----corn').message);
	assert(validate('uni-co___rn').message);
	assert(!validate('øl-unicorn').isValid);
	assert(validate('øl-unicorn').message);
	assert(validate('uni-co.rn').isValid);
	assert(validate('uni-co.rn').message);
	assert(validate('uni-corné').isValid);
	assert(validate('uni-corné').message);
	assert(validate('xml-unicorn').isValid);
	assert(validate('xml-unicorn').message);
	assert(validate('foo-💩').message);
});
