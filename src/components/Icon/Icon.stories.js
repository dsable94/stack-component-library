import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import { storyOptions } from '../../../.storybook/options';

import readme from './README.md';

import Icon from './Icon';

const stories = storiesOf('Components|Images and icons/Icon', module);

const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.displayName] = item.iconName;
    return obj;
  }, {});

const options = arrayToObject(Icons);

stories.addParameters(storyOptions);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add(
  'Default',
  () => (
    <>
      <Icon size={12} icon={select('Icon', options, 'add')} />
      <Icon icon={select('Icon', options, 'add')} />
    </>
  ),
  {
    notes: readme,
  },
);
