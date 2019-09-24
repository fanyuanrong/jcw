import React from 'react';
// import './login.scss';
import bg from './images/login_bg.png';
import qq from './images/qq.png';
import weibo from './images/weibo.png';

export default class Login extends React.Component{

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
							<h1 style={{fontSize:"25px",}}>找回密码</h1>
							<div >
								<div >
									<form>
										<ul style={{
											textAlign:"center",
											paddingTop:"40px",
										}}>
											<li style={{
												width:"250px",
												listStyle: "none",
												display:"inline-block"
											}}>
												<input type="text"
													   name="text"
													   placeholder="请输入账号"
													   style={{border:"0",width:"200px",height:"45px",borderBottom:"1px solid black",}}/>
											</li>
										</ul>
									</form>
								</div>
								<div style={{
									padding:"40px"
								}}>
									<a href="javascript:;"
									   disabled="disabled"
									   style={{width:"250px",height:"50px",display:"block",background:"rgb(0,0,0,0.1)",borderRadius:"25px",margin:"0 auto",lineHeight:"50px",color:"#fff"}}>下一步</a>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div>
		);
	}
}