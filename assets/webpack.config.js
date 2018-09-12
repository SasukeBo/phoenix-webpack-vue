const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function(env) {
  const production = process.env.NODE_ENV === 'production';

  return {
    devtool: production ? 'source-maps' : 'eval',

    entry: './js/app.js',

    output: {
      path: path.resolve(__dirname, '../priv/static/js'),
      filename: 'app.js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        }
      ],
    },

    plugins: [
      new VueLoaderPlugin(),
    ],

    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'js')],
      extensions: ['.js'],
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      },
    },
  };
};
