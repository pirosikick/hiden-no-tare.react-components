import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line import/extensions
import Hello from '../src/Hello.jsx';

test(t => {
  const wrapper = shallow(<Hello name="world" />);
  t.is(wrapper.html(), '<h1>Hello, world!</h1>');
});
