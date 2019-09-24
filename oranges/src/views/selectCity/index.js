import React from 'react';
import '../../assets/Home/selectCity/select.scss';
import axios from 'axios';
import pubsub from "pubsub-js";

class SelectCity extends React.Component{
    constructor(){
        super()
        this.state = {
            currentCity:'全国',
            hot_city_List:[],
            SortedCityList:{
                'A':[]
            }

        }
    }
    render(){
        return (
            <div className={'selectCity'}>
                <div className={'selectCity-block'}>
                    <span id={'dangqian'} className={'selectCity-title'}>当前城市</span>
                    <ul className={'city-block__con__wrap'}>
                        <li className={'city-block__con__item'} onClick={()=>{this.props.history.push('/');localStorage.city = '全国'}}>{localStorage.city || '全国'}</li>
                    </ul>
                </div>

                <div className={'selectCity-block '}>
                    <span id={'dingwei'} className={'selectCity-title'}>定位城市</span>
                    <ul className={'city-block__con__wrap'}>
                        <li className={'city-block__con__item'} onClick={()=>{
                            this.props.history.push('/');
                            localStorage.city = '全国'
                            localStorage.city_id = 0;
                            localStorage.abbreviation = null;
                            pubsub.publish("loaction",0);
                            }}>{localStorage.city || '全国'}</li>
                    </ul>
                </div>
                    
                <div className={'selectCity-block'}>
                    <span id={'remen'} className={'selectCity-title'}>热门城市</span>
                    <ul className={'city-block__con__wrap'} >
                        {
                            this.state.hot_city_List.map((v,i)=>{
                                return (
                                    <li key={i} className={'city-block__con__item'} onClick={()=>{
                                        this.props.history.push('/');
                                        localStorage.city = v.name;
                                        localStorage.city_id = v.id;
                                        localStorage.abbreviation = v.Abbreviation;
                                        pubsub.publish("loaction",0);
                                    }}>{v.name}</li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
                {
                   
                    Object.keys(this.state.SortedCityList).map((item) => {
                        return (
                            <div key={item}  className={'selectCity-block '}>
                                <span id={item}  className={'selectCity-title'}>{this.state.SortedCityList[item].id}</span>
                                <ul className={'city-block__con__wrap'} style={{display:'block'}}>
                                    {
                                       this.state.SortedCityList[item].list?(this.state.SortedCityList[item].list.map((v,i)=>{
                                            return (
                                                <li key={i} className={'selectCity-Sorted_item'} onClick={()=>{
                                                    this.props.history.push('/');
                                                    localStorage.city = v.name
                                                    localStorage.city_id = v.id;
                                                    localStorage.abbreviation = v.Abbreviation;
                                                    pubsub.publish("loaction",0);
                                                }}>{v.name}</li>
                                            )
                                        })):null
                                    }
                                    
                                </ul>
                            </div>
                        )
                    })
                }
                <div className={'city-nav'}>
                        <a className={"city-nav__lab"} href='#dangqian'>当前</a>
                        <a className={"city-nav__lab"} href='#dingwei'>定位</a>
                        <a className={"city-nav__lab"} href='#remen'>热门</a>
                        {
                            Object.keys(this.state.SortedCityList).map((item)=>{
                                return (
                                    <a key={item} className={"city-nav__lab"}  href={'#'+item}>{item}</a>
                                )
                            })
                        }

                 </div>
            </div>
        )
    }
    async componentDidMount(){
        const HotCityList = await axios.get('/Apijcw/city/city/getHotCityList?version=6.0.3&referer=2')
        const SortedCityList = await axios.get('/Apijcw/city/city/getSortedCityList?version=6.0.3&referer=2')
        this.setState({
            hot_city_List:HotCityList.data.hot_city_List,
            SortedCityList:SortedCityList.data
        })
    }

}

export default SelectCity