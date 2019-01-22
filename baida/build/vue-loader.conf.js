'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ?
  config.build.productionSourceMap :
  config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: false
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  // //引用 proxy
  // proxy: {
  //   '/bdapi': {
  //     target: "https://m.bd-ego.com/bd-marketing", // 代理服务器
  //     changeOrigin: true,
  //     pathRewite: {
  //       '^/bdapi': ''
  //     }, // 替换部分路径
  //   }
  // },
  // host: '0.0.0.0', //localhost,127.0.0.1,ip地址都可以访问
}
