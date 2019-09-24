import React,{Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
class Banner extends Component{ 
    render(){
        const classifyHome=this.props.classifyHome||[]
        return (
            <div className="swiper-container banner-swiper">
                    <div className="swiper-wrapper banner-swiper-wrapper">
                        {
                            classifyHome.map((v,i)=>{
                                return (
                                <div className="swiper-slide banner-swiper-slide" key={i} >
                                    <Link to={v.url}>
                                        <img style={{width:'100%',height:'5.23rem',verticalAlign:"middle"}} src={v.image_url} alt="" />
                                    </Link>
                                    </div> 
                                )
                            })
                        }
                    </div>
                <div className="swiper-pagination banner-swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getClassifyHome({
          city_id: localStorage.city_id||0,
          city_abridge:localStorage.city_abridge||""         
        })
      setTimeout(function(){
        new Swiper('.banner-swiper',{
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            speed:300,//自动播放
            autoplay : {
                delay:3000
              },
            // 如果需要分页器
            pagination: {
              el: '.banner-swiper-pagination',
            },
          }) 
        },1000)
    }
}
export default connect(state=>({classifyHome:state.home.ClassifyHome.slide_list}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Banner)

