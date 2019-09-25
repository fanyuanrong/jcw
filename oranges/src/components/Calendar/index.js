import React from 'react'
import {
    NavLink,
    withRouter
}from 'react-router-dom'
import '../../assets/Calendar/index.css'
import axios from 'axios'
import Topscoll from '../punlic/Topscoll'
import { Calendar } from 'antd';
class Calendars extends React.Component{
    constructor(){
        super();
        this.state = {
            showList : [],
            list : []
        }
    }
    render() {
        return(
            <div className={"app"}>
                <div className={"page calendar_wrap"}>
                    <Topscoll msg={"演出日历"} dis={"block"} style={{zIndex:"1000"}}></Topscoll>
                </div>
                <div className={"show_type_wrap"}>
                    <div className={"show_type js_li_type"}>
                        <ul>
                            <li onClick={this.setcategory.bind(this,0)}>
                                <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+(0)}>全部</NavLink>
                            </li>
                            {
                                this.state.list.map((v,i)=>(
                                    <li onClick={this.setcategory.bind(this,v.category_id)} key={i}>
                                        <NavLink activeStyle={{color:"#ff6743",borderBottom:"2px solid #ff6743"}} to={"/calendar/index/"+v.category_id}>{v.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={"city_wrap"}>
                        <span className={"city"}>全国</span>
                        <span className={"city_icon iconfont icondibiao"}></span>
                    </div>
                </div>
                <div className={"Calendar"}>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} onChange={this.onSelect}/>
                </div>
                <div className={"recommend-list"}>
                    {
                        this.state.showList.map((v,i)=>(
                            <ul key={i}>
                                <li>
                                    <div className={"show-icon"}>
                                        <a href="">
                                            <img src={v.pic} alt=""/>
                                        </a>
                                    </div>
                                    <div className={"item-desc"}>
                                        <p className={"show-date"}><strong>{v.show_time_top}</strong></p>
                                        <a href="">
                                            <h3 className={"text-double"}>{v.name}</h3>
                                        </a>
                                        <p className={"venue text-single"}>{v.city_name}|{v.venue_name}</p>
                                        <p className={"price"}><strong>￥{v.min_price}</strong> 起</p>
                                    </div>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("https://m.juooo.com/Search/getShowCategory?version=6.0.5&referer=2")
            .then(({data})=>{
                this.setState({
                    list : data.show_category_list
                })
            })
        this.setcategory()
    }
    setcategory(category = 0){
        axios.get("https://api.juooo.com/Show/Search/getShowList?category="+category+"&city_id=0&start_time=2019%2F9%2F25&page=1&version=6.0.6&referer=2")
            .then(({data})=>{
                console.log(data)
                this.setState({
                    showList : data.list
                })
            })
    }
    onSelect(){
        console.log()
    }
}
export default withRouter(Calendars)