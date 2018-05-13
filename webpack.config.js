const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (env, argv) {
  return {
    module: {
      rules: [
        {
          test: /\.s?[ac]ss$/,
          use: ExtractTextPlugin.extract({
            use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }]
          })
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new ExtractTextPlugin('styles.css'),
    ],

    // Pretty stats
    stats: { colors: true },

    // Sourcemap config
    devtool: 'source-map'
  }
}
