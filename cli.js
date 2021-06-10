#!/usr/bin/env node
import logSymbols from 'log-symbols';
import meow from 'meow';
import validate from './index.js';

const cli = meow(`
	Usage
	  $ validate-element-name <element-name>

	Example
	  $ validate-element-name s-slider
	  ${logSymbols.success} Valid element name
`,
	{ importMeta: import.meta }
);

if (cli.input.length === 0) {
	console.error('Specify an element name');
	process.exit(1);
}

const result = validate(cli.input[0]);

if (result.isValid) {
	if (result.message) {
		console.log(logSymbols.success + ' Valid element name, but...');
		console.log(logSymbols.warning + ' ' + result.message);
	} else {
		console.log(logSymbols.success + ' Valid element name.');
	}
} else {
	console.error(logSymbols.error + ' ' + result.message);
}
