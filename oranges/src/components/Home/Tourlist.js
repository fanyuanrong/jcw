import React,{Component}from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import '../../assets/Home/Tourlist.scss'
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
class Tourlist extends Component{
    render(){
        const tourlist=this.props.Tourshowlist||[]
        const tourlists=tourlist.slice(0,6)
        return (
            <div className={'tour-block tour-wrap'}>
                <div className={'tour-block__wrap'}>
                    <h3>巡回演出</h3>
                    <NavLink to={'/Tour/moreTourShowList'} className={'tour-block__lab-a'}>
                        <img src={require("../../assets/Home/images/gt.png")} alt="" />
                    </NavLink>
                </div> 
                <div className={'tour-block__list'}>
                    <div className="swiper-container tour-swiper_list">
                        <div className="swiper-wrapper tour-swiper-wrapper">
                                {
                                    tourlists.map((v,i)=>{
                                        return (
                                            <div key={i} className="swiper-slide tour-swiper-slide">
                                                <NavLink to={"/Tour/moreTourShowList"} className={'tour-block__list__wrap'}>
                                                    <div className={'tour-block__list__wrap__item '}>
                                                        <img src={v.pic} alt='' />
                                                    </div>
                                                    <h3 className={'tour-block__list__wrap__title '}>{v.show_name }</h3>
                                                    <p className={'tour-block__list__wrap__num'}>{v.schedular_num+'场巡演'}</p>
                                                </NavLink>
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
    componentDidMount(){
        this.props.getTourRecommendList()
        setTimeout(()=>{
            new Swiper('.tour-swiper_list', {
                loop:true,
                slidesPerView:'auto',
                centeredSlides:true,
                spaceBetween: 30,
                slideActiveClass:'.tour-swiper-slide-active'
            });
        },1000)
    }
}  
export default connect(state=>({Tourshowlist:state.home.Tourshowlist.tour_show_list}),dispatch=>bindActionCreators(homeCreator,dispatch))(Tourlist)

