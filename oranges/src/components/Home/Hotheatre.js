import React,{Component}from "react"
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
import {NavLink} from "react-router-dom"
import  "swiper/dist/css/swiper.min.css"
import Swiper from 'swiper';
import "../../assets/Home/Hotheatres.scss"
class Hothearte extends Component{
    componentDidMount() {
        this.props.getHoTheatre()
        setTimeout(function(){
            new Swiper ('.hot_venue_swiper', {
                direction: 'horizontal',
                loop: false,
                setWrapperSize :true,
                slidesPerView : "auto",
            })
        },1000)
    }
    render() {
        const Hotheatre=this.props.Hotheatre||[];
        return(
            <div className={'hot_venue'}>
                <div className={"hot_venue__wrap"}>
                    <h3 className={"hot_venue__h3"}>热门场馆</h3>
                    <NavLink to={'/theatre/theatreList'} className={'hot_block__lab_a'}>
                        <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=='} alt={''} />
                    </NavLink>
                </div>
                <div className={"hot_venue__block"}>
                    <div className="swiper-container hot_venue_swiper">
                        <div className="swiper-wrapper hot_venue_swiper_two">
                            {
                               Hotheatre.map((v, i) => {
                                    return (
                                        <div className="swiper-slide swiper_slide_active_hotvenue"key={i}>
                                            <div className={"hot_venue_block_info"}>
                                                <NavLink className={"hot_venue_swiper_top_img"} to={"/theatre/index?tid="+v.id}>
                                                    <img src={v.pic} alt="" to={"/theatre/index?tid="+v.id}　/>
                                                </NavLink>
                                                <div className={"hot_center"}>
                                                    <h3 className={"hot_venue_swiper_top_h"}>{v.name}</h3>
                                                    <b className={"hot_venue_swiper_top_b"}>{v.count}场在售演出</b>
                                                </div>
                                                <NavLink className={"hot_venue_swiper_top_i"} to={"/theatre/index?tid="+v.id}　>...</NavLink>
                                            </div>
                                            <div className={"hot_venue_botton"} key={i}>
                                            {
                                               v.showList.map((o,i)=>{
                                                    return(
                                                        <div key={i}>
                                                            <p>{o.show_time}</p>
                                                            <p className={"hot_venue_botton_p"}>
                                                                <NavLink to={"/ticket/"+o.id} className={"hot_venue_botton_nav"}><img src={o.pic} alt=""/></NavLink>
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
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
export default connect(state=>({Hotheatre:state.home.Hotheatre}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Hothearte)