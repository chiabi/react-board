import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BoardListItem from '../components/BoardListItem';

const post = {
  id: 0,
  title: 'Hello FDS JSON Server',
  body: 'helloooooooooooo',
  author: 'fds'
}
storiesOf('BoardListItem', module)
  .addDecorator(story => (
    <BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>
  ))
  .add('empty', () => (
    <BoardListItem/>
  ))
  .add('fulfilled', () => (
    <BoardListItem {...post}/>
  ))