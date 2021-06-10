import test from 'ava';
import m from './index.js';

test('returns false for `isValid` and with a `message` for invalid names', (t) => {
	t.false(m('').isValid);
	t.false(m('foo').isValid);
	t.false(m('annotation-xml').isValid);
	t.false(m('0-foo').isValid);
	t.false(m('-foo').isValid);
	t.false(m('foo-$').isValid);
	t.false(m('foo-/').isValid);
	t.false(m('FOO-BAR').isValid);
	t.false(m('foo/').isValid);
	t.truthy(m('foo/').message);
});

test('returns true for `isValid` and without `message` for valid names', (t) => {
	t.true(m('foo-bar').isValid);
	t.falsy(m('foo-bar').message);
	t.true(m('não-tém').isValid);
	t.true(m('foo-bÅr').isValid);
});

test('returns true for `isValid` with warnings for not recommended names', (t) => {
	t.true(m('polymer-').isValid);
	t.truthy(m('polymer-').message);
	t.true(m('x-').isValid);
	t.true(m('ng-').isValid);
	t.true(m('unicorn-').isValid);
	t.truthy(m('unicorn-').message);
	t.truthy(m('unicorn-ø').message);
	t.truthy(m('uni--corn').message);
	t.truthy(m('uni-----corn').message);
	t.truthy(m('uni-co___rn').message);
	t.false(m('øl-unicorn').isValid);
	t.truthy(m('øl-unicorn').message);
	t.true(m('uni-co.rn').isValid);
	t.truthy(m('uni-co.rn').message);
	t.true(m('uni-corné').isValid);
	t.truthy(m('uni-corné').message);
	t.true(m('xml-unicorn').isValid);
	t.truthy(m('xml-unicorn').message);
	t.truthy(m('foo-💩').message);
});
