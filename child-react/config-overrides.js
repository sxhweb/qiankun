module.exports = {
    webpack: (config) => {
        config.output.library = `reactApp`;
        config.output.libraryTarget = 'umd';
        config.output.globalObject = 'window';
        config.output.publicPath = `http://localhost:3020/`
        return config;
      },
    
      devServer: (configFunction) => {
        return function (proxy,allowedHost){
          const config = configFunction(proxy,allowedHost);
          config.headers = {
            "Access-Control-Allow-Origin":'*'
          }
          return config
        }
      },
}