const {getRandom} = require("./method");
const querystring = require("querystring");
const request = require("request");
// 发送验证码
module.exports = (phoneId,cb)=>{
    const code = getRandom(100000,999999);
    const mobile = phoneId;
    const tpl_id = "188090";
    const tpl_value = "#code#="+code;
    const key = "b4e97d83a3a60698668c1c8563c06655"
    let url = "http://v.juhe.cn/sms/send";
    url += "?"+querystring.stringify({
        mobile,
        tpl_id,
        tpl_value,
        key
    })
    request(url,(err,response,body)=>{
        if(!err && response.statusCode === 200){
            cb({
                ok:1,
                code
            })
        }else{
            cb({
                ok:-1,
                msg:"发送失败"
            })
        }
    })
}
