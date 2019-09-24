const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;// 属性，可以通过该属性的connect方法连接你的数据库
const objid=mongodb.ObjectID;//修改数据库传递过来id的类型
//私有化方法可以连接数据库
_private=()=>{
    return new Promise((resolve,reject)=>{
        mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true ,useUnifiedTopology: true},(err,client)=>{
            if(err){
                reject("连接数据库失败")
            }else{
                const db=client.db("jcw")
                resolve(db);
            }
        })
    })
}
/*
*插入一条记录。
* 给指定的集合插入指定的记录
* back:操作的集合名
* refer:插入的文档
*/
module.exports.insertone=async(back,refer)=>{
    const db=await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).insertOne(refer,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
/*根据ID删除指定的集合文档
*back:集合名
* id:删除的文档ID
*/
module.exports.deleteonebyid=async(back,id)=>{
    const db=await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).deleteOne({_id:objid(id)},(err,results)=>{
            if(err){
                reject(err)          
            }else{
                resolve(results)
            }
        })
    })
}
//根据ID进行修改
module.exports.updateonebyid=async(back,id,upObj)=>{
    const db=await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).updateOne({_id:objid(id)},upObj,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
//根据条件进行更新
module.exports.updateone=async(back,refer,upObj)=>{
    const db = await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).updateOne(refer,upObj,(err,results)=>{
            if(err) reject(err);
            else resolve(results)
        })
    })
}
/*
* 根据条件获得指定集合的总文档数量
* back:集合名
* refer:条件
*/
module.exports.count=async(back,refer = {})=>{
    const db = await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).countDocuments(refer).then((count)=>{
            resolve(count);
        })
    })
}
/*
* 查找多条
* back:查找的集合名字
* refer:查找的条件
* sort:排序
* limit:查找前多少条
* skip:跳过多少条
*/
module.exports.find=async(back,{refer={},sort={},limit=5,skip=0})=>{
    const db=await _private(); 
    return new Promise((resolve,reject)=>{
        db.collection(back).find(refer).sort(sort).limit(limit).skip(skip).toArray((err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
//根据ID查找文档
module.exports.findonebyid=async(back,id)=>{
    const db=await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).findOne({_id:objid(id)},(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
// 根据条件查找一条记录
module.exports.findone=async(back,refer)=>{
    const db=await _private();
    return new Promise((resolve,reject)=>{
        db.collection(back).findOne(refer,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
//封装分页
module.exports.getpageinfo=async(back,obj={})=>{
    let {refer={},limit=5,pageIndex=1,sort={},resultsName=back,title=back} = obj;
    const count = await this.count(back,refer);
    let pageSum = Math.ceil(count/limit);// 总页数
    if(pageSum < 1) pageSum = 1;
    if(pageIndex < 1) pageIndex = 1;
    if(pageIndex > pageSum) pageIndex = pageSum;
    const results = await this.find(back,{
        refer,
        limit,
        skip:(pageIndex-1)*limit,
        sort
    })
    return {
        pageIndex,
        pageSum,
        count,
        ok:1,
        title,
        [resultsName]:results
    };
}








