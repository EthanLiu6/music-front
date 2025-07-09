//用户的请求API
//导入axios的实例
import axios from './index.js';

const user = {
    //登录API
    login:(data)=>{
        //注意这里的data必须是formData数据结构，包括文件上传
        return new Promise((resolve,reject)=>{
            axios.post("/api/user/login",data).then(response=>{
                resolve(response);
            }).then(error=>{
                reject(error);
            })
        })
    },

    //**************************************************************//
    /****************************以下是参照案例，不能直接使用*************/
    //*************************************************************//
    //根据用户名称查询用户信息：使用问号传递参数
    getUser:(name)=>{
        return new Promise((resolve,reject)=>{
            axios.get("/api/user/query",{
                params:{
                    //name:name
                    name
                }
            }).then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    },
    //使用REST传参获取用户信息
    getUserInfo:(name)=>{
        return new Promise((resolve,reject)=>{
            axios.get("/api/user/"+name).then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    },
    //获取订单
    getOrders:()=>{
        return new Promise((resolve,reject)=>{
            axios.get("/api/user/order",).then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    }

}
export default  user;
