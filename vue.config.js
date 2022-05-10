// webpack项目打包用的，需要使用common.js规范
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        // target:'http://mall-pre.springboot.cn',
        target:"http://mi.futurefe.com/api",
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}
