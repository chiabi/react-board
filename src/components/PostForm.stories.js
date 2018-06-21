import React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PostForm from '../components/PostForm';

const post = {
  "id": 1,
  "title": "Hello FDS JSON Server :)",
  "body": "...",
  "author": "fds"
}

storiesOf('PostForm', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('empty', () => <PostForm  />)