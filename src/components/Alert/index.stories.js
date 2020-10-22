import React from 'react';

import { storiesOf } from '@storybook/react';
import Alert from '.';

storiesOf('Components|Alert', module)
.add('primary', () => (
    <Alert alertType='primary'>
        A simple primary alert with an example link. Give it a click if you like.
    </Alert>
))
.add('secondary', () => (
    <Alert alertType='secondary'>
        A simple secondary alert with an example link. Give it a click if you like.
    </Alert>
));