#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var pkg = require('./package.json');
var validate = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    validate-element-name <element-name>',
		'',
		'  Example',
		'    validate-element-name s-slider',
		'    ' + logSymbols.success + ' Valid element name.'
	].join('\n'));
}

if (!input || argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

var res = validate(input);

if (res.isValid) {
	if (res.message) {
		console.log(logSymbols.success + ' Valid element name, but...');
		console.log(logSymbols.warning + ' ' + res.message);
	} else {
		console.log(logSymbols.success + ' Valid element name.');
	}
} else {
	console.error(logSymbols.error + ' ' + res.message);
}
