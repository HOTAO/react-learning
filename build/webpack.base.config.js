const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, '../src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
    elementReact: ['element-react']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: "/",
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }]
      },
      {
        test: /\.(woff|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: `fonts/[name].[hash].[ext]`
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '../src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['elementReact', 'vendor']
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    })
  ],
  resolve: {
      alias: {
          pages: path.join(__dirname, '../src/pages'),
          component: path.join(__dirname, '../src/component'),
          router: path.join(__dirname, '../src/router'),
          actions: path.join(__dirname, '../src/redux/actions'),
          reducers: path.join(__dirname, '../src/redux/reducers'),images: path.join(__dirname, '../src/assets/images'),
          mock: path.join(__dirname, '../mock'),
          utils: path.join(__dirname, '../src/utils')
      }
  }
}

module.exports = baseConfig;
