/* eslint-disable */
const {
  assets,
  hashLen,
  srcPath,
  limit,
  publicPath,
  rootPath,
  mockPath
} = require('../config');
const path = require('path');
const webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry : {
    index: [`${srcPath}/main.js`] // 主模块
  },
  module : {
    rules: [{
      test   : /\.vue$/,
      loader : 'eslint-loader',
      enforce: 'pre',
      options: {
        fix      : true,
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test   : /\.js$/,
      loader : 'eslint-loader',
      enforce: 'pre',
      options: {
        fix      : true,
        formatter: require('eslint-friendly-formatter')
      },
      include: [resolve('src'), resolve('test')]
    },{
      test   : /\.(eot|ttf|otf|woff2?)(\?\S*)?$/,
      loader : 'url-loader',
      options: {
        limit: limit,
        name : `${assets}/style/fonts/[name].[ext]?v=[hash:${hashLen}]`
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use : {
        loader : 'url-loader',
        options: {
          limit: limit,
          name : `${assets}/images/[name].[ext]?v=[hash:${hashLen}]`,
          esModule: false
        }
      }
    }, {
      test   : /\.(js|jsx)$/,
      // vue-virtual-scroller 重新babel转化，本插件对es6语法的不完全
      include: [srcPath, mockPath, path.join(__dirname, '../node_modules/vue-virtual-scroller')],
      use    : {
        loader: 'babel-loader',
        options: {
          plugins: [
            require.resolve('babel-plugin-transform-vue-jsx'),
          ],
        }
      }
    }, {
      test   : /\.ejs/,
      loader : 'ejs-loader',
      options: {
        interpolate: /\{\{(.+?)\}\}/,
        evaluate   : /\[\[(.+?)\]\]/
      }
    }]
  },
  plugins: [
    //   new webpack.ProvidePlugin({
    //     jquery: "jquery",
    //     $: "jquery"
    //   })
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
  ],
  externals: {
    jquery: 'jQuery',
    ENV_CONFIG: 'ENV_CONFIG'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.css', '.json', '.jsx'],
    alias     : {
      'components': `${srcPath}/components`,
      'directives': `${srcPath}/directives`,
      'filtres'   : `${srcPath}/filtres`,
      'images'    : `${srcPath}/images`,
      'modules'   : `${srcPath}/modules`,
      'style'     : `${srcPath}/style`,
      'utils'     : `${srcPath}/utils`,
      'views'     : `${srcPath}/views`,
      'src'       : srcPath,
      'apis'      : `${srcPath}/apis`,
      'common'    : `${srcPath}/common`,
      'vue$'      : 'vue/dist/vue.esm.js',
      'variable$' : `${srcPath}/style/variables/system-variable.scss`,
      'moment'    : path.resolve(process.cwd(), 'node_modules', 'moment'),
      'columns'   : `${srcPath}/colums`
    }
  }
};
