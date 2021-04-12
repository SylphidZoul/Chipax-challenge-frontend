const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      meta: {
        description: "Frontend of Chipax's RickAndMorty Challenge.",
        'theme-color': '#030303'
      }
    })
  ]
}
