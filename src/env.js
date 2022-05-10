let baseURL;
// "serve": "vue-cli-service serve --mode=development",  是在package.json中设置的
// node.js得api
// 这种适合jsonp、cors的跨域方法
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}
