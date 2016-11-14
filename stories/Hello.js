import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hello from '../src/Hello/Hello';

storiesOf('Hello', module)
  .add('with name', () => (
    <Hello name="pirosikick" />
  ));
