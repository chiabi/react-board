import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import UserForm from '../components/UserForm';

storiesOf('UserForm', module)
  .add('empty', () => <UserForm />)
  .add('onChange', () => <UserForm onChangeUsername={e => e.target.value} onChangePassword={e => e.target.value}/>)