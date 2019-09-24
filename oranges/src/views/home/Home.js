import React,{Component} from 'react';
import "../../assets/Home/Home.scss"
import {withRouter}from 'react-router-dom';
//引入组件
import Banner from '../../components/Home/Banner'//轮播图组件
import Advertion from '../../components/Home/Advertion'//广告组件
import Hotlist from '../../components/Home/Hotlist'//热门演出组件
import Tourlist from '../../components/Home/Tourlist';//巡回演出组件
import Vipblock from '../../components/Home/Vipblock';//vipblock组件
import Floorshow from '../../components/Home/Floorshow';//各种会
import Hotheatre from '../../components/Home/Hotheatre';//热门场馆
import Recommend from '../../components/Home/Recommend';//为你推荐
import Loading from "../../components/punlic/Loading" //加载组件
class Home extends Component{
    constructor(){
        super();
        this.state = {
            isMore:1,
            isLoading:true
        }
    }
    changeHeader(){
        if(typeof(this.refs.header) !== 'undefined'){
            let  scrollY = window.scrollY;
            let  headerHeight = 44;
            if(headerHeight > scrollY){
                this.refs.header.id = ''
            }
            if(headerHeight < scrollY){
                this.refs.header.id = 'header-active'
            }
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{          
            this.changeHeader.call(this);
        })
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        },2000);
    }
    render(){
        if(this.state.isLoading){
            return <Loading></Loading>
        }else{
            return(
                <div className={'home'} style={{background:"#fff",marginBottom:"1.5rem"}}>
                    <header className={'Header'} ref={'header'}>
                        <div className={'home-location'}>
                            <i className={'iconfont icon-dingwei'}></i>
                            <span onClick={()=>this.props.history.push('/index/selectCity')} >{localStorage.city || '全国'}</span>
                        </div>
                        <div className={'home-search'} onClick={()=>{
                            this.props.history.push("/search/index")
                        }}>
                            <img src='https://m.juooo.com/static/img/nav_icon_search.f194288.png' alt='' />
                            <span>搜索热门演出</span>
                        </div>
                        <div className='home-right'>
                            <img style={{width:'.72rem',height:'.6666rem'}} src='https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png' alt='' />
                        </div>
                    </header>
                    <Banner></Banner>
                    <Advertion></Advertion>
                    <Hotlist></Hotlist>
                    <Tourlist></Tourlist>
                    <Vipblock></Vipblock>
                    <Floorshow></Floorshow>
                    <Hotheatre></Hotheatre>
                    <Recommend></Recommend>
                </div>
            )
        }
    }   
}

export default withRouter(Home)

