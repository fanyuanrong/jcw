import  React from  "react"
import "../../assets/Home/search/search.css"
import pubsub from "pubsub-js"
class  HotSerch extends React.Component{
    render(){
        return (
        <div className={"hot-search"}>
        <h3>热门搜索</h3>
            <ul className={"list"}>
                {
                    this.props.SearchList.map((v,i)=>{
                       return (
                           <li  onClick={()=>{
                               pubsub.publish("one",v);
                               console.log(v)
                           }} key={i}>{v}</li>
                       )
                    })
                }
            </ul>
        </div>
        )
    }


}
export default HotSerch