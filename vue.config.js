/*
 * @Author: 月魂
 * @Date: 2022-08-23 10:29:06
 * @LastEditTime: 2022-08-24 13:41:03
 * @LastEditors: 月魂
 * @Description: 
 * @FilePath: \vue-admin\vue.config.js
 */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver(),  IconsResolver({
          prefix: 'Icon',
        }),],
      }),
      Components({
        resolvers: [ElementPlusResolver(),   IconsResolver({
          enabledCollections: ['ep'],
        }),],
      }),
    ],
  }
}
