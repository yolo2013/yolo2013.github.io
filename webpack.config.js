
var webpack = require('webpack')

// 是否是生产环境标志
var isProduct = process.env.NODE_ENV === 'production'

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var autoprefixer = require('autoprefixer')


var plugins = [
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  // 生成独立的CSS文件
  new ExtractTextPlugin('[name].css', {
    allChunks: isProduct
  }),
  // 自动生成HTML
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    hash: true,
    minify: {
      collapseWhitespace: isProduct,
      conservativeCollapse: isProduct
    }
  }),
  new CleanWebpackPlugin(['dist'], {
    dry: false
  })
]

if (isProduct) {
  // 压缩JavaScript脚本
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false}
  }))
}

module.exports = {
  plugins: plugins,
  // 页面入口文件配置
  entry: {
    index: './src/scripts/index.js'
  },
  // 入口文件输出配置
  output: {
    path: 'dist',
    filename: '[name]_bundle.js'
  },
  devtool: (isProduct ? false : 'source-map'),
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    //加载器配置
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(otf|ttf)$/, loader: 'file-loader'}
    ]
  },
  // CSS处理，增加浏览器兼容前缀
  postcss: function () {
    return [autoprefixer]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  resolve: {
    extensions: ['', '.js', '.less', '.css', 'png', 'jpg', 'jpeg']
  },
  externals: {
    'zepto': 'Zepto'
  }
}
