import React from 'react';
// import './login.scss';
import bg from './images/login_bg.png';
import qq from './images/qq.png';
import weibo from './images/weibo.png';
import axios from 'axios'
export default class Login extends React.Component{
	constructor(){
		super()
	}
	async getSendCode(phoneId){
		console.log(555,phoneId)
		const data =  await axios.get('http://127.0.0.1/sendCode',{
			params:{
				query:{
					phoneId
				}
			}
		})
	}
	render() {
		return (
			<div>

				<div style={{
					background:"url("+bg+")",
				}}>
					<div style={{
						width:"100%",
						height:"40px",
					}}>
						<a href="javascript:;" style={{
							textDecoration:"none",
							float:"left",
							display:"block",
							height:"40px",
							width:"40px",
							lineHeight:"40px",
							background:"pink",
						}} onClick={()=>{this.props.history.push('/')}}>
							<span className={"icon iconfont"}>&#xe601;</span>
						</a>
					</div>
					<div className={"main"}>
						<div >
							<h1 style={{fontSize:"25px"}}>欢迎来到聚橙网</h1>
							<div >
								<div >
									<form>
										<ul style={{
											textAlign:"center",
											paddingTop:"40px",
										}}>
											<li style={{
												width:"250px",
												borderBottom:"1px solid black",
												listStyle: "none",
												display:"inline-block"
											}}>
												<label style={{color:"red"}}>+86</label>
												<input ref='loginInput'
													   type="text"
													   name="text"
													   placeholder="请输入手机号"
													   style={{border:"0",width:"200px",height:"45px"}}/>
											</li>
										</ul>
										<p style={{fontSize:"10px"}}>未注册手机号验证成功后自动创建账户</p>
									</form>
								</div>
								<div style={{
									padding:"40px"
								}}>
									<button
									   onClick={()=>{
										   console.log('获取验证码')
										   this.getSendCode(this.refs.loginInput.value)}}
									
									   style={{width:"250px",height:"50px",display:"block",background:"rgb(0,0,0,0.1)",borderRadius:"25px",margin:"0 auto",lineHeight:"50px",color:"#fff"}}>获取验证码</button>
								</div>
								<div style={{
									width:"200px",
									height:"40px",
									margin:"0 auto",
								}}>
									<span style={{float:"left"}}>忘记密码</span>
									<span style={{float:"right"}}>密码登录</span>
								</div>
							</div>
						</div>
					</div>
					<div className={"footer-wrap"} style={{position: "relative",paddingTop:"60px"}}>
						<div >
							<p >其他登录方式</p>
						</div>
						<div style={{width:"40%",margin:"0 auto",paddingTop:"20px"}}>
							<div style={{float:"left"}}>
								<a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq">
									<span style={{background:"url("+qq+")",
										backgroundSize:"100% 100%",
										width:"35px", height:"35px",
										display:"block"}}>
									</span>
								</a>
							</div>
							<div style={{float:"right"}}>
								<a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina">
									<span style={{background:"url("+weibo+")",
										float:"right",
										backgroundSize:"100% 100%",
										width:"35px", height:"35px",
										display:"block"}}>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
} 