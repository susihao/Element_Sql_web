// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),


    // devServer: {
    //   https: false,
    //   hotOnly: false,
    //   Proxy: {
    //     'api': {
    //       target: 'http://localhost:8888',
    //       changeOrigin: true,
    //       pathRewrit: {
    //         '^/api': ''
    //       }
    //     }
    //   }
    // }
  ],
}