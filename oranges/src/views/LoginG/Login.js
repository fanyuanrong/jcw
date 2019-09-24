import React from 'react';
import axiso from 'axios';
import '../../assets/Login/index.scss';
import {Icon} from 'antd';
import  CommonTitle from  '../../common/commonTitle'
class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            isShow:0
        }
    }
    //按钮变色方法
    btnChange(long){
            if(long >0) {
                this.refs.loginBtn.id = 'loginbtnid' 
            }
            else {
                this.refs.loginBtn.id = ''
            } 
    }
    //获取验证码方法
    async btnSendCode(phoneId){
        const str = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if(str.test(phoneId)) {
            const data = await axiso.get('http://127.0.0.1/sendCode',{
                params:{
                    phoneId
                    
                }
            })
            if(data.ok === 1){
                this.refs.tipsText.innerHTML = '验证码发送成功'
                this.refs.dialogs.style.display = 'block'
                setTimeout(()=>{
                    this.refs.dialogs.style.display = 'none'
                    this.refs.loginInput.value = ''
                    localStorage.phoneId = phoneId;
                    this.props.history.push('/Passport/verify')
                },1000)
            }else{
                this.changeDialog('验证码发送失败')
            }
        }else {
            this.changeDialog('号码格式不正确')
        }
    }
    //账号密码登录方法
    async btnLogin(phoneId,password){
        const str = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if(str.test(phoneId) && password.length){
            const data = await axiso.post('http://127.0.0.1/login',{               
                    phoneId,
                    password               
            })
            if(data.ok === 1) {
                localStorage.token = data.token;
                this.refs.tipsText.innerHTML = '登录成功'
                this.refs.dialogs.style.display = 'block'
                setTimeout(()=>{
                    this.refs.dialogs.style.display = 'none'
                    this.props.history.push('/')
                },1000)
            }else{
                this.changeDialog(data.msg)
            }
        }else{
            this.changeDialog('号码格式不正确')
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
            <div className={'loginBlock'}>
                <CommonTitle commonTitle={'欢迎您登录'} history={this.props.history}></CommonTitle>
                <div className={"main"}>
                    <div className={"login-wrap"}>
                        <h1 className={'login-title'}>欢迎来到聚橙网</h1>
                        {
                            this.state.isShow === 0?(
                                <div className={"binding-iphone"}>
                                    <div className={"login-area"}>
                                        <div className={"lg-list"}>
                                            <label>+86&nbsp;</label>
                                            <input ref={'loginInput'} type="text" placeholder="请输入手机号" className="lg-input" onChange={()=>{
                                                const long = this.refs.loginInput.value.length;
                                                this.btnChange(long)
                                            }} />
                                        </div>
                                        <p className={"tip"}>未注册手机号验证成功后自动创建账户</p>
                                    </div>
                                    <div className={"login-btn"}>
                                        <div ref={'loginBtn'} className={'lg-btn'} onClick={()=>{
                                            const long = this.refs.loginInput.value.length;
                                            if(long > 0){
                                               this.btnSendCode.call(this,this.refs.loginInput.value)
                                            }
                                        }} >发送验证码</div>
                                    </div>
                                    <div className={"login-toggle"}>
                                        <span className={"lg-left"}></span>
                                        <span className={"lg-right"} onClick={()=>{
                                            this.setState({
                                                isShow:1
                                            })
                                        }}>密码登录</span>
                                    </div>
                                </div>
                            ):null
                        }
                        {
                            this.state.isShow === 1?(
                                <div className={'binded-iphone'}>
                                    <div className={"login-area"}>
                                        <div className={"lg-list"}>
                                            <input ref={'loginInputPhone'} type="text" placeholder="请输入手机号" className="lg-input" onChange={()=>{
                                                const long = this.refs.loginInputPhone.value.length;
                                                this.btnChange(long)
                                            }} />
                                        </div>
                                        <div className={"lg-list"}>
                                            <input ref={'loginInputPassward'} type="password" placeholder="请输入密码" className="lg-input"/>
                                        </div>
                                    </div>
                                    <div className={"login-btn"}>
                                        <div ref={'loginBtn'} className={'lg-btn'} onClick={()=>{
                                            const long = this.refs.loginInputPhone.value.length;
                                            if(long > 0){
                                                this.btnLogin.call(this,this.refs.loginInputPhone.value,this.refs.loginInputPassward.value)
                                            }
                                        }} >登录</div>
                                    </div>
                                    <div className={"login-toggle"}>
                                        <span className={"lg-left"}>忘记密码</span>
                                        <span className={"lg-right"} onClick={()=>{
                                            this.setState({
                                                isShow:0
                                            })
                                        }}>验证码登录</span>
                                    </div>
                                </div>
                            ):null
                        }  
                    </div>
                </div>
                <div className={"footer-wrap"}>
                    <div className={"footer-title"}>
                        <p className={'footer-title-txt'}>其他登录方式</p>
                    </div>
                    <div className={"footer-inner"}>
                        <div className={'loginItem'}>
                           <Icon type='qq'></Icon>
                        </div>
                        <div className={'loginItem'}>
                        <Icon type='weibo-circle'></Icon>
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

export default Login
