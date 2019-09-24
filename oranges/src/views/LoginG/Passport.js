import React from 'react';
import axiso from 'axios';
import '../../assets/Login/passport.scss';
// import  CommonTitle from  '../../common/commonTitle'
class PassPort extends React.Component{
    constructor(){
        super()
        this.state = {
            inPutOne:false,
            inPutTwo:false,
            inPutThree:false,
            inPutFour:false,
        }
    }
   
    componentDidMount(){
        
        
    }
    //验证验证码
    async getsendCode(){
        const arr = document.querySelectorAll('.lg-input')
            if(this.state.inPutOne && this.state.inPutTwo && this.state.inPutThree && this.state.inPutFour){
                const str = ''+arr[0].value+arr[1].value+arr[2].value+arr[3].value;
                const data = await axiso.post('http://47.98.149.83:8001/loginCode',{
                    phoneId:localStorage.phoneId,
                    code:str
                })
                if(data.ok === 1){
                    localStorage.token = data.token;
                    this.refs.tipsText.innerHTML = '验证码正确'
                    this.refs.dialogs.style.display = 'block'
                    setTimeout(()=>{
                        this.refs.dialogs.style.display = 'none'
                        if(data.type === 2)
                            this.props.history.push('/Passport/setPassword')
                        else 
                            this.props.history.push('/')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    },1000)
                }else{
                    this.changeDialog('验证码错误')
                }
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
            <div className={'verify-wrap'}>
                {/* <CommonTitle commonTitle={'验证'} history={this.props.history}></CommonTitle> */}
                <div className={'main'}>
                    <div className={'login-wrap'}>
                        <h1 className={'login-title'}>验证码</h1>
                        <p className={'verify-tip'}>
                            已经验证码发送至手机
                            <span>{'手机号'}</span>
                        </p>
                        <div className={'login-area'}>
                            <form>
                                <ul className={'ve-list'}>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutOne' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[0].value.length>0){
                                                this.state.inPutOne = true;
                                                this.getsendCode.call(this)
                                                arr[1].focus()//赋予元素焦点
                                            }else{
                                                this.state.inPutOne = false
                                            }
                                        }} />
                                    </li>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutTwo' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[1].value.length>0){
                                                this.state.inPutTwo = true;
                                                this.getsendCode.call(this)
                                                arr[2].focus()
                                            }else{
                                                this.state.inPutTwo = false
                                                arr[0].focus()
                                            }
                                        }}/>
                                    </li>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutThree' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[2].value.length>0){
                                                this.state.inPutThree = true;
                                                this.getsendCode.call(this)
                                                arr[3].focus()
                                            }else{
                                                this.state.inPutThree = false
                                                arr[1].focus()
                                            }
                                        }}/>
                                    </li>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutFour' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[3].value.length>0){
                                                this.state.inPutFour = true;
                                                this.getsendCode.call(this); 
                                            }else{
                                                this.state.inPutFour = false
                                                arr[2].focus()
                                            }
                                        }}/>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <p className={"set-time "}>重新获取验证码</p>
                    </div>
                </div>

                <div ref='dialogs' className={'dialog'} >
                    <p  ref='tipsText' className={'tips-text'}>这是提示用的 </p>
                </div>
            </div>
        )
    }
}
export default PassPort;