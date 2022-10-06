import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps, CustomButton } from '.';

export default {
  title: 'Button',
  component: CustomButton,
  argTypes: {
    variant: {
      name: 'Buttons variation',
      type: {
        name: 'string',
        required: true,
      },
      description:
        'Variations of the button, can be text, outlined or contained',
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        category: 'Attribute',
      },
    },
    children: {
      name: 'Children',
      type: {
        name: 'string',
        required: true,
      },
      description: 'The label of the button',
      table: {
        type: { summary: 'string' },
        category: 'Attribute',
      },
    },
    size: {
      name: 'Size',
      type: {
        name: 'string',
        required: true,
      },
      description: 'Size of the button',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        category: 'Attribute',
      },
    },
    color: {
      name: 'Color',
      type: {
        name: 'string',
        required: true,
      },
      description: 'Color of the button',
      options: ['primary', 'secondary', 'warning', 'error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        category: 'Attribute',
      },
    },
  },
} as unknown as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <CustomButton {...args} type="submit" />
);

export const ContainedPrimaryButton = Template.bind({});
export const OutlinedSecondaryButton = Template.bind({});
export const TextButton = Template.bind({});

ContainedPrimaryButton.args = {
  variant: 'contained',
  children: 'Button',
  size: 'medium',
};

OutlinedSecondaryButton.args = {
  variant: 'outlined',
  children: 'Button',
  size: 'small',
};

TextButton.args = {
  variant: 'text',
  children: 'Button',
  size: 'large',
};
