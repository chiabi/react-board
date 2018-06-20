import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BoardList from '../components/BoardList';

const posts = [
  {  
    title: 'Hello FDS JSON Server',
    author: 'fds'
  }, {
    title: 'react create app with storybook',
    author: 'chichi'
  },{
    title: 'axios axios',
    author: 'chichi'
  }
]
storiesOf('BoardList', module)
  .add('empty', () => <BoardList />)
  .add('one item', () => <BoardList posts={posts.slice(0, 1)}/>)
  .add('items', () => <BoardList posts={posts}/>)