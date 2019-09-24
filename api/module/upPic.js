const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const uploadDir = path.resolve(__dirname,"../upload"); 
const form = new formidable.IncomingForm();
/*
* 上传模块
* req:请求对象
* picName:表单元素当中提交文件的名字
* {
*   ok:-1,错误，1：未上传图片 2、图片格式不正确 3、上传成功
* }*/
module.exports.upPic=(req,picName)=>{   
    form.uploadDir = uploadDir;//设置上传的文件目录。
    form.keepExtensions = true;// 是否保留上传文件的扩展名。
    return new Promise((resolve,reject)=>{
        form.parse(req,(err,params,file)=>{
            if(err){
                reject({ok:-1,msg:"网络连接错误"})
            }else{
            const picInfo = file[picName];
            if(picInfo.size<=0){//未上传图片
                 //删除空文件
                fs.unlink(picInfo.path,(err)=>{
                    resolve({ok:1,params,msg:"请选择您要上传的图片"})
                })
            }else{ 
                // 验证上传文件是否合法
                const index = picInfo.name.lastIndexOf(".");
                const keepName = picInfo.name.substr(index).toLowerCase();
                const keepArr = ['.png',".gif",".jpg"];
                //判断数组当中是否包含上传文件的扩展名
                if(keepArr.includes(keepName)){// 上传的格式正确
                    // 扩展名是否在允许范围以内。
                    const newPicName = Date.now()+keepName;
                    fs.rename(picInfo.path,uploadDir+"/"+newPicName,(err)=>{
                        resolve({
                            ok:3,
                            newPicName,//最终图片的名字
                            msg:"上传成功",
                            params
                        })
                    });
                }else{//格式不正确
                    fs.unlink(picInfo.path,(err)=>{
                        resolve({
                            ok:2,
                            msg:"请上传符合要求的图片，目前支持'.png','.gif','.jpg'"
                        })
                    })
                }
            }
        }
    })
    })

}