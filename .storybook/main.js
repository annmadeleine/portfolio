module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|tsx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
    },
    {
      name: '@storybook/addon-actions',
    },
    {
      name: '@storybook/addon-links',
    },
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    {
      name: '@storybook/addon-controls'
    }
  ]
};