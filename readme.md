# validate-element-name [![Build Status](https://travis-ci.org/sindresorhus/validate-element-name.svg?branch=master)](https://travis-ci.org/sindresorhus/validate-element-name)

> Validate the name of a [custom element](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/)


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


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
