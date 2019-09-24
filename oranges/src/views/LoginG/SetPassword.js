import React from 'react';
import axiso from 'axios';
import '../../assets/Login/index.scss';
import {Icon} from 'antd';
// import  CommonTitle from  '../../common/commonTitle'

class SetPassword extends React.Component{



    //按钮变色方法
    btnChange(long){
        //console.log(666,long);
            if(long >0) {
                this.refs.loginBtn.id = 'loginbtnid'
            }
            else {
                this.refs.loginBtn.id = ''
            } 
    }
    //设置密码方法
    async addPassword(password){
        const str = /^[a-zA-Z0-9]{6,16}$/;
        if(str.test(password)){
            if(password.length>=6){
                const data = await axiso.post('http://47.98.149.83:8001/addPassword',{
                    phoneId:localStorage.phoneId,
                    password
                })
                console.log(666,data)
                if(data.ok === 1){
                    this.refs.tipsText.innerHTML = '密码设置成功'
                    this.refs.dialogs.style.display = 'block'
                    setTimeout(()=>{
                        this.refs.dialogs.style.display = 'none'
                        this.refs.loginInput.value = ''
                        this.props.history.push('/')
                    },1000)
                }else{
                    this.changeDialog('密码设置失败')
                }
            }else{
                this.changeDialog('请设置6-16位（数字+字母）')
            }
        }else{
            this.changeDialog('请设置6-16位（数字+字母）')
        }

    }
    //提示信息方法
    changeDialog(context){
        this.refs.tipsText.innerHTML = context
        this.refs.dialogs.style.display = 'block'
        setTimeout(()=>{
            this.refs.dialogs.style.display = 'none'
        },2000)
    }
    render(){
        return (
            <div className={'loginBlock'} style={{background:'#fff'}}>
                {/* <CommonTitle commonTitle={'密码'} history={this.props.history}></CommonTitle> */}
                <div className={"main"}>
                    <div className={"login-wrap"}>
                        <h1 className={'login-title'} style={{textAlign:'left'}}>设置新密码</h1>
                                <div className={"binding-iphone"}>
                                    <div className={"login-area"}>
                                        <div className={"lg-list"}>
                                            <input ref={'loginInput'} type="password" placeholder="请设置6-16位（数字+字母）" className="lg-input" onChange={()=>{
                                                const long = this.refs.loginInput.value.length;
                                                this.btnChange(long)
                                            }} />
                                        </div>
                                        
                                    </div>
                                    <div className={"login-btn"}>
                                        <div ref={'loginBtn'} className={'lg-btn'} onClick={()=>{
                                            const long = this.refs.loginInput.value.length;
                                            if(long > 0){
                                               this.addPassword.call(this,this.refs.loginInput.value)
                                            }
                                        }} >保存</div>
                                    </div>
                                   
                                </div>
                    </div>
                </div>

                <div ref='dialogs' className={'dialog'} >
                    <p  ref='tipsText' className={'tips-text'}>这是提示用的 </p>
                </div>

                
            </div>
        )
    }
}

export default SetPassword