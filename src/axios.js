import axios from 'axios'
import {Message} from "_element-ui@2.15.8@element-ui";

// import env from './env'
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 根据前端的跨域方式做调整
// axios.defaults.baseURL = 'https://www.fastmock.site/mock/5e82029955a63066ee5a6bb30c1e01dd/api';

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        // 没有登录的时候,状态码为10
        // 在main.js中不可以使用路由
        if (path != '#/index') {
            window.location.href = '/#/login';
        }
        return Promise.reject(res);
    } else {
        Message.warning(res.msg);
        return Promise.reject(res);
    }
}, (error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
});

export default axios
