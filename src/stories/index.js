import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';

// import { Welcome } from '@storybook/react/demo';
import Button from './Button';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button onClick={action('clicked')} className={text('className', '')}>
      {text('children', 'Save')}
    </Button>
  ));
