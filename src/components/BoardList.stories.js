import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BoardList from '../components/BoardList';

const posts = [
  {
    id: 1,
    title: 'Hello FDS JSON Server',
    author: 'fds'
  },
  {
    id: 2,
    title: 'Hello CHI CHI',
    author: 'chi'
  },
  {
    id: 3,
    title: 'Hello CHI CHI',
    author: 'chiabi88'
  }
]
storiesOf('BoardList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('empty', () => <BoardList />)
  .add('items', () => <BoardList posts={posts}/>)