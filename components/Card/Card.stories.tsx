import React from 'react';

import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const CardComplete = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardComplete.args = {
  title: 'Hello World',
  imageSrc: '/image.jpeg',
  imageAlt: 'Tier',
};

export const CardTitle = Template.bind({});
CardTitle.args = {
  title: 'Hello World',
  imageSrc: '',
};

export const CardImage = Template.bind({});
CardImage.args = {
  title: '',
  imageSrc: '/image.jpeg',
};
