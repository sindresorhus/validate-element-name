import test from 'ava';
import validateElementName from './index.js';

test('returns false for `isValid` and with a `message` for invalid names', t => {
	t.false(validateElementName('').isValid);
	t.false(validateElementName('foo').isValid);
	t.false(validateElementName('annotation-xml').isValid);
	t.false(validateElementName('0-foo').isValid);
	t.false(validateElementName('-foo').isValid);
	t.false(validateElementName('foo-$').isValid);
	t.false(validateElementName('foo-/').isValid);
	t.false(validateElementName('FOO-BAR').isValid);
	t.false(validateElementName('foo/').isValid);
	t.truthy(validateElementName('foo/').message);
});

test('returns true for `isValid` and without `message` for valid names', t => {
	t.true(validateElementName('foo-bar').isValid);
	t.falsy(validateElementName('foo-bar').message);
	t.true(validateElementName('não-tém').isValid);
	t.true(validateElementName('foo-bÅr').isValid);
});

test('returns true for `isValid` with warnings for not recommended names', t => {
	t.true(validateElementName('polymer-').isValid);
	t.truthy(validateElementName('polymer-').message);
	t.true(validateElementName('x-').isValid);
	t.true(validateElementName('ng-').isValid);
	t.true(validateElementName('unicorn-').isValid);
	t.truthy(validateElementName('unicorn-').message);
	t.truthy(validateElementName('unicorn-ø').message);
	t.truthy(validateElementName('uni--corn').message);
	t.truthy(validateElementName('uni-----corn').message);
	t.truthy(validateElementName('uni-co___rn').message);
	t.false(validateElementName('øl-unicorn').isValid);
	t.truthy(validateElementName('øl-unicorn').message);
	t.true(validateElementName('uni-co.rn').isValid);
	t.truthy(validateElementName('uni-co.rn').message);
	t.true(validateElementName('uni-corné').isValid);
	t.truthy(validateElementName('uni-corné').message);
	t.true(validateElementName('xml-unicorn').isValid);
	t.truthy(validateElementName('xml-unicorn').message);
	t.truthy(validateElementName('foo-💩').message);
});
