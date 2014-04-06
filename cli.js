#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var validate = require('./index');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ validate-element-name <element-name>');
	console.log('');
	console.log('Example');
	console.log('  $ validate-element-name s-slider');
	console.log('  Valid element name 👍');
}

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

try {
	validate(input);
	console.log('Valid element name 👍');
} catch (err) {
	console.error(err.message);
}
