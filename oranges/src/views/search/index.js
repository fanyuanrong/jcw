import React from "react"
import "../../assets/Home/search/search.css"
import {connect} from "react-redux"
import searchCreator from "../../store/actionCreator/search";
import ShowList from "./showList"
import {bindActionCreators} from "redux"
import HotSerch from "./HotSerch"
import Correlation from"./correlation"
import {withRouter}from 'react-router-dom';
import axios from "axios"
import  pubsub from "pubsub-js"
class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            isShow:2,
            shopList:[]
        }
    }
    async changeShopList(value){
        const {data}  = await axios.get('/Mjcw/Search/getShowList?keywords='+value+'&page=1&sort_type=1&version=6.0.3&referer=2')
        if(data.result_type === 1){
            this.state.isShow = 1;
            this.setState({
                shopList:data.list
            })
        }else if (data.result_type === 3){
            this.state.isShow = 3;
            this.setState({
                shopList:data.list
            })
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.state.isShow = 2;
    }
    async changeHotWord(){
        this.props.getSearchList()
    }
    componentDidMount() {
        this.props.getSearchList()

    }
    render() {
        console.log('我是render',this.state.isShow)
        return (
            <div className={"page"}>
                <div className={"search"}>
                    <div className={"search-ipt"}>
                        <div  style={{marginTop: "5px"}}><i
                            style={{fontSize: "18px", textAlign: "center",}} className={"iconfont icon-sousuo"}></i>
                        </div>
                        <input ref={"keyword"} className={"search_text"} type={"search"} onChange={(e)=>{
                            console.log(2333,e.target.value.length)
                            e.target.value.length?this.changeShopList.call(this,this.refs.keyword.value):this.changeHotWord.call(this);
                        }} placeholder={"搜索热门演出"}/>
                        <div onClick={()=>{
                            this.changeHotWord.call(this)
                            this.refs.keyword.value=""
                        }}><i style={{fontSize: "16px", textAlign: "center", marginRight: "10px"}}
                                className={"iconfont icon-guanbi1"}></i></div>
                    </div>
                    <div className={"cancel"} onClick={()=>{
                        this.props.history.push("/")
                    }}>取消</div>
                </div>

                {
                    this.state.isShow === 1?<ShowList  {...this.state}></ShowList>:null
                }
                {
                    this.state.isShow === 2?<HotSerch  {...this.props}></HotSerch>:null
                }
                {
                    this.state.isShow === 3?<Correlation {...this.state}></Correlation>:null
                }


            </div>
        )
    }
    componentWillMount() {
        pubsub.subscribe("one",(a,b)=>{
            this.refs.keyword.value=b;
            this.changeShopList.call(this,b)
        })

    }


}
export default  connect((state)=>({SearchList:state.search.SearchList,}),(dispatch)=>bindActionCreators(searchCreator,dispatch))(withRouter(Search))