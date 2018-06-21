import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BoardView from '../components/BoardView';

const post = {
  "id": 1,
  "userId": 1,
  "title": "Hello FDS JSON Server :)",
  "body": "...",
  "user": {
    "username": "fds"
  }
}

storiesOf('BoardView', module)
  .add('fullfilled', () => <BoardView post={post} />)