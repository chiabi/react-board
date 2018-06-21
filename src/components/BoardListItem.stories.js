import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BoardListItem from '../components/BoardListItem';

const post = {
    title: 'Hello FDS JSON Server',
    user: {
      username: 'fds'
    }
  }
storiesOf('BoardListItem', module)
  .add('empty', () => <BoardListItem />)
  .add('fulfilled', () => <BoardListItem post={post}/>)