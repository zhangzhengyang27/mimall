// webpack项目打包用的，需要使用common.js规范
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        // target:"http://mi.futurefe.com/api",
        // 是否将主机头的原点改为目标源点
        changeOrigin:true,
        // 将api置为空
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
