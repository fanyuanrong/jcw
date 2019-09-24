import React,{Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {NavLink} from 'react-router-dom'
import "../../assets/Home/Hotlist.scss"
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
class Hotlist extends Component{
    componentDidMount(){
        this.props.getHotsRecommendList()
        setTimeout(()=>{
            new Swiper('.hot-block-swiper',{
                slidesPerView : "auto",
                centeredSlides : false,
                slidesPerView :3.2
            })
        },1000) 
    }
    render(){
        const hotlist=this.props.HotsShowlist.hots_show_list||[]
        const hotlists=hotlist.slice(0,10)
        return(
            <div className={"hot-block"}>
                <div className={'hot-block__lab'}>
                    <h3>热门演出</h3>
                    <NavLink to={"/show/showsLibrary"} className={'hot-block_lab-a'}>
                        <img src={require("../../assets/Home/images/gt.png")} alt="" />
                    </NavLink>
                </div>
                <div className={"hot-block__list"}>
                    <div className="swiper-container hot-block-swiper">
                        <div className="swiper-wrapper swiper-wrapper-div">
                            {
                               hotlists.map((v,i)=>{
                                   const str = v.schedular_url.replace('https://m.juooo.com/ticket/',"")
                                    return (
                                        <NavLink key={i} className="swiper-slide swiper-slide-link" to={'/ticket/'+str}>
                                            <img src={v.pic} alt={''} />
                                            <h3>{v.show_name}</h3>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 }
 export default  connect(state=>({ HotsShowlist:state.home.HotsShowlist}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Hotlist)