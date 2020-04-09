import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Button from ".";

storiesOf('Components|Button', module)
.add('primary', () => (
    <Button
        buttonType="button-primary"
        onClick={action('click')}>
        Boton Primario
    </Button>
))
.add('outline', () => (
    <Button
        buttonType="outline-primary"
        onClick={action('click')}>
        Boton Primario
    </Button>
));