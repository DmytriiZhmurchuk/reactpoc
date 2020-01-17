import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from './styled-button';

export default {
  component: Button,
  title: 'Styled-Button',
  decorators: [withInfo],
  parameters: {
    info: {
    	text:"description or documentation about my component, supports markdown"
    },
  }
};

export const usual = () => <Button onClick={action('clicked')}>Button Text</Button>;

export const primary = () => <Button primary={true}>Button Text</Button>;
