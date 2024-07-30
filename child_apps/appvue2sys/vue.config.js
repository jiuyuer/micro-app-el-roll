const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  devServer: {
    port: 9531,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
