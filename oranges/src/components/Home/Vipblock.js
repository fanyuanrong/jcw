import React from  'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';//高阶组件
import '../../assets/Home/Vipblock.scss'
class Vipblock extends React.Component{
    render(){
        const discountList=this.props.vipHomeSchedular.discountList||[];
        const watchList=this.props.vipHomeSchedular.watchList||[];
         return (
             <div className={'vip-block'}>
                 <NavLink className={'vip-block__advert'} to={'/vip/index'}>
                     <div className={'vip-block__advert__left'}>
                         <span className={'vip-block__advert__left__logo'}></span>
                         <span className={'vip-block__advert__left__tip'}>VIP+会员尊享权益</span>
                     </div>
                     <div className={'vip-block__advert__right'}>
                         <span className={'vip-block__advert__right__lab'}>99元/年</span>
                         <span className={'icon'}>&gt;</span>
                     </div>
                 </NavLink>
                 <div className={'vip-block__conent'}>
                     <div className={'vip-block__conent__power'}>
                        <NavLink to={"/vip/discount"}> <h3 className={'vip-block__conent__power__title'}>专享折扣<span className={'icon'}>&gt;</span></h3></NavLink>
                         <ul className={"vip-block__conent__power__wrap wrap--ul"}>
                             {
                               discountList.map((v,i)=>(
                                    <li key={i} className={'vip-block__conent__power__item item--list'}>
                                        <NavLink className={'vip-block__conent__power__click'} to={"/vip/discount"}>
                                                <img src={v.pic} alt="" />
                                            <p>
                                                <strong>{v.min_discount}</strong>
                                                <span>折</span>
                                            </p>
                                        </NavLink>
                                    </li>
                               ))  
                             }
                         </ul>
                     </div>
                    <div className={'vip-block__conent__power'}>
                        <h3 className={'vip-block__conent__power__title title--right'}>免费观影<span className={'icon'}>&gt;</span></h3>
                        <ul className={'vip-block__conent__power__wrap wrap-list--right'}>
                            <li className={'vip-block__conent__power__item'}>
                                {
                                    watchList.map((v,i)=>(
                                        <NavLink key={i} className={"vip-block__conent__power__click"} to={"/vip/free-view"}>
                                            <img  src={v.pic} alt={''} />
                                            <p>
                                                <span>￥0</span>
                                                <strong>￥{v.price}</strong>
                                            </p>
                                        </NavLink>
                                    ))
                                }
                               
                            </li>
                        </ul>
                    </div>
                 </div> 
             </div>
         )
     }
}
export default connect(state=>({vipHomeSchedular:state.home.vipHomeSchedular}),null)(Vipblock) 
