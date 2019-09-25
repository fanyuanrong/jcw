import React from 'react';
import {withRouter} from "react-router-dom";
import Topscoll from '../punlic/Topscoll';
import { Icon } from 'antd';
import '../../assets/myjuooo/css/MyjuoooScores.css'

class MyjuoooScores extends React.Component{
    render(){
        return(
            <div>
                <Topscoll msg={"积分商城"} dis={"block"}></Topscoll>
                <div className={"Scores_top"}>
                        <span className={"Scores_num"}>0</span>
                        <span className={"Scores_jf"}>积分详情<Icon type="right" /> </span>
                </div>
                <div className={"Scores_center"}>
                    <div className={"Scores_center_change"}>城市</div>
                    <div className={"Scores_center_change"}>积分</div>
                </div>
                <div className={"Scores_bottom"}>

                </div>
            </div>
        )
    }
}
export default withRouter(MyjuoooScores)
