import React from "react";
import {NavLink} from 'react-router-dom'
export default class MyjuoooMy extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <NavLink to={this.props.to}>
                <div className="myjuooo_my">
                    <img src={this.props.src}/>
                    <div className="myjuooo_my_msg_all">{this.props.msg}</div>
                </div>
            </NavLink>
        )
    }
}






