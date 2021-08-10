
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port:3010
  },
  configureWebpack: {
    output: {
      library: `vueApp`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    
    },
  },
};