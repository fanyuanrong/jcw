import React,{Component} from 'react';
import '../../assets/Home/Advertion-wrap.scss';
import {NavLink,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';//高阶组件
import {bindActionCreators} from 'redux'//绑定并执行一次函数
import homeCreator from '../../store/actionCreator/Home';//首页的数据请求方法
 class Advertion extends Component{
    componentDidMount(){
        this.props.getVipHomeSchedular()
    }
    render(){
        const classifyHome=this.props.classifyHome;
        return(
           <>
               { 
                   classifyHome.classify_list?(
                    <div className={'advertion-wrap'}>
                        <div className={"lable-item"}>
                            {
                                classifyHome.classify_list.map((v,i)=>{
                                    const str = v.url.replace('https://m.juooo.com/show/showsLibrary?',"")
                                    return(
                                    <div key={i} className={"label-item__block"}>
                                        <NavLink   className={"label-item__block__column"} to={"/show/showsLibrary?"+str}>
                                            <img src={v.pic} ait=""/>
                                            <span>{v.name}</span>
                                        </NavLink>
                                    </div>
                                )})
                            }
                        </div>
                        <div className={"operation"}>
                            <ul className={"operation__ul operation--top"}>
                                <li className={'operation__item'}>
                                    <NavLink to={'/plus/index'} className={'operation__item__block1'}>
                                        <div>
                                            <h3 className={'operation__item__block__title'}>{classifyHome.operation_list[0].name}</h3>
                                            <p dangerouslySetInnerHTML={{__html:classifyHome.operation_list[0].describe }}></p>
                                        </div>
                                        <div className={'operation__item__block__icon'}>
                                            <img src={classifyHome.operation_list[0].pic} alt=""/>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={'operation__item'}>
                                    <NavLink to={'/vip/index/1'} className={'operation__item__block1'}>
                                        <div>
                                            <h3 className={'operation__item__block__title'}>{classifyHome.operation_list[1].name}</h3>
                                            <p dangerouslySetInnerHTML={{__html:classifyHome.operation_list[1].describe }}></p>
                                        </div>
                                        <div className={'operation__item__block__icon'}>
                                            <img src={classifyHome.operation_list[1].pic} alt=""/>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className={"operation__ul operation--bottom"}>
                                <li className={'operation__item'}>
                                    <NavLink to={'/Scores/index'} className={'operation__item__block2'}>
                                        <div>
                                            <h3 className={'operation__item__block__title'}>{classifyHome.operation_list[2].name}</h3>
                                            <p dangerouslySetInnerHTML={{__html:classifyHome.operation_list[2].describe }}></p>
                                        </div>
                                        <div className={"operation__item__block__preferential"}>
                                            <img src={classifyHome.operation_list[2].pic} alt=""/>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={'operation__item'}>
                                    <NavLink to={'/calendar/index'} className={'operation__item__block2'}>
                                        <div>
                                            <h3 className={'operation__item__block__title'}>{classifyHome.operation_list[3].name}</h3>
                                            <p dangerouslySetInnerHTML={{__html:classifyHome.operation_list[3].describe }}></p>
                                        </div>
                                        <div className={"operation__item__block__preferential"}>
                                            <img src={classifyHome.operation_list[3].pic} alt=""/>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={'operation__item'}>
                                    <NavLink to={'/Cardproduct/index'} className={'operation__item__block2'}>
                                        <div>
                                            <h3 className={'operation__item__block__title'}>{classifyHome.operation_list[4].name}</h3>
                                            <p dangerouslySetInnerHTML={{__html:classifyHome.operation_list[4].describe }}></p>
                                        </div>
                                        <div className={"operation__item__block__preferential"}>
                                            <img src={classifyHome.operation_list[4].pic} alt=""/>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div> 
                     </div>
                    ) 
                    :null
                }
               
           </>
        )
    }
}
export default connect(state=>({classifyHome:state.home.ClassifyHome}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(withRouter(Advertion) ) 