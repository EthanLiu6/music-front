//axios的实例
import axios from 'axios';
const axiosInstance = axios.create({
    //baseURL: 'http://localhost:9090/',访问的url前缀， 前端跨域不使用，后端跨域要使用
    timeout: 5000, //超时时间
})
//请求拦截器
axiosInstance.interceptors.request.use(config => {
    //获取本地token
    let token = localStorage.getItem("token");
    //将token设置到请求头中
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
},error=>{
    //没有联网，超时都可以在这里
    return Promise.reject(error);
})
//响应拦截器
axiosInstance.interceptors.response.use(response => {
    //成功获取数据
    return response.data; //过滤掉其他数据，只要data这一坨
},error=>{
    return Promise.reject(error);
})

export default axiosInstance;