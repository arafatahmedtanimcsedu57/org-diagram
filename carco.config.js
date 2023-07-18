const path = require('path');
const CracoAlias = require('craco-alias');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@components': resolve('src/components'),
          '@actions': resolve('src/actions'),
          '@middlewares': resolve('src/middlewares'),
          '@utils': resolve('src/utils'),
          '@helpers': resolve('src/helpers'),
          '@constants': resolve('src/constants'),
          '@containers': resolve('src/containers'),
          '@reducers': resolve('src/reducers'),
          '@hooks': resolve('src/hooks'),
          '@selectors': resolve('src/selectors'),
          '@api': resolve('src/api'),
          '@types': resolve('src/types'),
        },
      },
    },
  ],
};