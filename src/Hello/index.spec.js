import test from 'ava';
import Default, { Hello } from './index';

test('Hello is exported', t => {
  t.truthy(Hello);
});

test('default is Hello', t => {
  t.is(Default, Hello);
});
