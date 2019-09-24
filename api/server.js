const express = require("express");
const bodyParser = require("body-parser");
const method = require("./module/method");
const db = require("./module/db")
const sendCode = require("./module/sendCode")
const app = express();
const fs = require("fs");

app.use(bodyParser.json());
app.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT");
    next();
})

// //发送验证码
// app.get("/sendCode",function(req,res){
//     const phoneId = req.query.phoneId;
//     //console.log('6666666',req.query.phoneId,phoneId)
//     db.findOne("codeList",{
//         phoneId
//     },function(err,codeInfo){
//         if(codeInfo){
//             console.log(33,codeInfo)
//             let time = Date.now()-codeInfo.sendTime;
//            // console.log('验证码时间',time,time>90*1000)
//             if(time>90*1000){
//                 sendCode(phoneId,function(obj){
//                     console.log('过期',obj)
//                     if(obj.ok === 1){
//                         db.updateOne("codeList",{
//                             phoneId
//                         },{
//                             $set:{
//                                 code:obj.code,
//                                 sendTime:Date.now()
//                             }
//                         },function(err,results){
//                             if(err) help.json(res,-1,"发送失败")
//                             // else help.json(res,1,"发送成功")
//                             else {
//                                 res.json({
//                                     ok:1,
//                                     msg:'发送成功',
//                                     obj
//                                 })
//                             }
//                         })
//                     }else{
//                         help.json(res,-1,"发送失败")
//                     }
//                 })
//             }else{
//                 console.log('验证码时间没过期',codeInfo.code)
//                 res.json({
//                     ok:-2,
//                     msg:"发送过于频繁，请稍后再试",
//                     timer:Math.ceil((90*1000-time)/1000)
//                 })
//             }
//         }else{
//             //没有发送过短信
//             sendCode(phoneId,function(obj){
//                 console.log('没发过短信',obj.code)
//                 if(obj.ok === 1){
//                     db.insertOne("codeList",{
//                         phoneId,
//                         code:obj.code,
//                         sendTime:Date.now()
//                     },function(err){
//                         if(err) help.json(res,-1,"验证码保存失败")
//                         else help.json(res,1,"发送成功")
//                     })
//                 }else{
//                     help.json(res,-1,"验证码发送失败")
//                 }
//             })

//         }
//     })
// })
// //验证码登录
// app.post("/loginCode",(req,res)=>{
//     const {phoneId,code} = req.body;
//     console.log(phoneId,code)
//     db.findOne("codeList",{
//         phoneId
//     },function(err,codeInfo){
//         if(err) help.json(res,-1,"获取信息失败")
//         else{
//             console.log(22,codeInfo)
//             if(codeInfo){
//                 if((codeInfo.sendTime+90*1000)>Date.now()){
//                     if(codeInfo.code === code/1){
//                         db.findOne("userList",{
//                             phoneId
//                         },function(err,results){
//                             if(err) help.json(res,-1,"获取客户信息失败，请检查网络连接")
//                             else{
//                                 if(results){
//                                     db.updateOne("userList",{
//                                         phoneId
//                                     },{
//                                         $set:{
//                                             lastTime:Date.now()
//                                         }
//                                     },function(err,results){
//                                         if(err) help.json(res,-1,"获取客户信息失败，请检查网络连接")
//                                         else{
//                                             res.json({
//                                                 ok:1,
//                                                 phoneId,
//                                                 token:jwt.encode(phoneId),
//                                                 msg:"登录成功",
//                                                 type:1
//                                             })
//                                         }
//                                     })
//                                 }else{
//                                     db.insertOne("userList",{
//                                         phoneId,
//                                         lastTime:Date.now(),
//                                         gold:9999
//                                     },function(err,results){
//                                         if(err) help.json(res,-1,"注册客户信息失败，请检查网络连接")
//                                         else{
//                                             res.json({
//                                                 ok:1,
//                                                 phoneId,
//                                                 token:jwt.encode(phoneId),
//                                                 msg:"登录成功",
//                                                 type:2
//                                             })
//                                         }
//                                     })
//                                 }
//                             }
//                         })
//                     }else{
//                         help.json(res,-1,"验证码不正确，请重新输入")
//                     }
//                 }else{
//                     help.json(res,-1,"验证码已过期，请重新获取")
//                 }
//             }else{
//                 help.json(res,-1,"请先获取验证码")
//             }
//         }
//     })
// })
// //设置新密码
// app.post('/addPassword',(req,res)=>{
//     const {phoneId,password} = req.body;
//     console.log(phoneId,password)
//     db.updateOne("userList",{
//         phoneId
//     },{
//         $set:{
//             password
//         }
//     },(err,results)=>{
//         if(err) help.json(res,-1,"获取客户信息失败，请检查网络连接")
//         else{
//             res.json({
//                 ok:1,
//                 phoneId,
//                 msg:"设置成功",
//             })
//         }
//     })
    
// })
// //密码登录
// app.post('/login',(req,res)=>{
//     const {phoneId,password} = req.body;
//     db.findOne('userList',{
//         phoneId,
//         password
//     },(err,results)=>{
//         if(err) help.json(res,-2,'网络连接错误')
//         else{
//             if(results){
//                 res.json({
//                     ok:1,
//                     msg:'登录成功',
//                     token:jwt.encode(phoneId),
//                 })
//             }
//             else help.json(res,-1,'账号或密码错误')
//         }
//     })
// })
app.listen(80,()=>{
    console.log("success");
})