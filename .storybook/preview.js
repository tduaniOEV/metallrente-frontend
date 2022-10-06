import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  html: {
    highlighter: {
      showLineNumbers: true, // default: false
    },
  },
};

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
