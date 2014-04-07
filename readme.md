# validate-element-name [![Build Status](https://travis-ci.org/sindresorhus/validate-element-name.svg?branch=master)](https://travis-ci.org/sindresorhus/validate-element-name)

> Validate the name of a [custom element](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/)

Custom element names should start with `a-z` and contain `a-z` and at least one `-` with optionally `0-9`.  
[You should not use the `x-` or `polymer-` or `ng-` prefix](http://webcomponents.github.io/articles/how-should-i-name-my-element/).


## Install

```bash
$ npm install --save validate-element-name
```


## Usage

```js
var validate = require('validate-element-name');

try {
	validate('unicorn');
} catch (err) {
	console.log(err.message);
	//=> 'Custom element names must contain a hyphen. Example: unicorn-cake'
}
```

Throws an error if the custom element name is invalid.


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global validate-element-name
```

#### Usage

```bash
$ validate-element-name --help

Usage
  $ validate-element-name <element-name>

Example
  $ validate-element-name s-slider
  Valid element name 👍
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
