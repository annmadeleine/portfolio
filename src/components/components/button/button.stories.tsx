//
// Show color variables.
//

// Imports
import React from 'react';
import Button from './button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Default = (args) => <Button {...args}/>;
Default.args = { label: 'Button', disabled: false };