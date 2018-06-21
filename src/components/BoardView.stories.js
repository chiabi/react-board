import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BoardView from '../components/BoardView';

const post = {
  "id": 1,
  "title": "Hello FDS JSON Server :)",
  "body": "...",
  "author": "fds"
}

storiesOf('BoardView', module)
  .add('fulfilled', () => <BoardView post={post} />)