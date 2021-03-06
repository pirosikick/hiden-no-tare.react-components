import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

test(t => {
  const wrapper = shallow(<Hello name="world" />);
  t.is(wrapper.html(), '<h1>Hello, world!</h1>');
});
