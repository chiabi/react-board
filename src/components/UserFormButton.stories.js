import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import UserFormButton from '../components/UserFormButton';

storiesOf('UserFormButton', module)
  .add('empty', () => <UserFormButton/>)