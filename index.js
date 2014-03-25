'use strict';
var ncname = require('ncname');

var reservedNames = [
	'annotation-xml',
	'color-profile',
	'font-face',
	'font-face-src',
	'font-face-uri',
	'font-face-format',
	'font-face-name',
	'missing-glyph'
];

module.exports = function (name) {
	if (!name) {
		throw new Error('Missing element name');
	}

	if (name.indexOf('-') === -1) {
		throw new Error('Custom element names must contain a hyphen. Example: unicorn-cake');
	}

	if (/^\d/i.test(name)) {
		throw new Error('Custom element names must not start with a digit');
	}

	if (/^-/i.test(name)) {
		throw new Error('Custom element names must not start with a hyphen');
	}

	// http://www.w3.org/TR/custom-elements/#concepts
	if (!ncname.test(name.replace(/-/g, ''))) {
		throw new Error('Invalid element name.');
	}

	if (reservedNames.indexOf(name) !== -1) {
		throw new Error('The supplied element name is reserved and can\'t be used. See: http://www.w3.org/TR/custom-elements/#concepts');
	}

	return true;
};
