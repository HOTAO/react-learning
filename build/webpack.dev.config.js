const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge');

const devConfig = {
  /*入口*/
  entry: {
    app: [
      'babel-polyfill', 'react-hot-loader/patch', path.join(__dirname, '../src/index.js')
    ]
  },

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    filename: '[name].[hash].js'
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "stylus-loader"]
      }
    ]
  },
  devServer: {
    port: 8901,
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    // 绕过主机检查
    disableHostCheck: true
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.DefinePlugin({MOCK: true})]
};

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(baseConfig, devConfig);
