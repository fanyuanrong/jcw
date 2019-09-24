import  React from 'react';
import  '../assets/Login/commonTitle.scss'
import {Icon,Modal} from 'antd'
import {withRouter} from "react-router-dom";
import Popovers from '../components/punlic/Topscoll'
class CommonTitle extends  React.Component{
    render(){
        return (
            <div className={'common-title'}>
                <span className={'title__text'}>{this.props.commonTitle}</span>
                <Icon className={"title__ellipsis"} type="left" onClick={()=>{this.props.history.go(-1)}} />
            </div>
        )
    }
}
export default withRouter(CommonTitle)
