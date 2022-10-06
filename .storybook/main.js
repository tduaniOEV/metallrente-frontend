module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storyshots',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  staticDir: ['../public'],
};
