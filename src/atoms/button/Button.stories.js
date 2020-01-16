import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './styled-button';

export default {
  component: Button,
  title: 'Styled-Button',
};

export const usual = () => <Button onClick={action('clicked')}>Button Text</Button>;

export const primary = () => <Button primary={true}>Button Text</Button>;
