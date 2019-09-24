const md5 = require("md5");
const jwt = require("jwt-simple");
const key = "$%^&*()_)(*&^%$";//秘钥
const str = "ele.com(*&^(*&^(*&";//盐料
//随机数
module.exports.getRandom =(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
}
//token加密
module.exports.encode=({adminName,exp=24*60*60*1000})=>{
    return jwt.encode({
        adminName,
        lastTime:Date.now()+exp
    },key)
}
//token解密
module.exports.decode=(token)=>{
    try{
        const info=jwt.decode(token,key);
        if(info.lastTime>Date.now()){
            return {
                ok:1,
                msg:"验证成功"
            }
        }else{
            return {
                ok:-2,
                msg:"身份验证过期"
            }
        }
    }catch (err){
        return {
            ok:-3,// 异常
            msg:"解析失败"
        }
    }
}


//md5加密
module.exports.md5 =(v)=>{
    return md5(v+str)
}
//时间
module.exports.getTime=()=> {
    let time = new Date();
    return time.getFullYear()+"-"
        +(time.getMonth()+1).toString().padStart(2,"0")+"-"
        + (time.getDate()).toString().padStart(2,"0")+" "
        + (time.getHours()).toString().padStart(2,"0") + ":"
        + (time.getMinutes()).toString().padStart(2,"0") + ":"
        + (time.getSeconds()).toString().padStart(2,"0");
}
//请求完成返回的信息
module.exports.json = (res,ok=-1,msg="网络连接错误")=>{
    res.json({
        ok,
        msg
    })
}

