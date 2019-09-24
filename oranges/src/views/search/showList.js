import  React from "react"
import {NavLink} from "react-router-dom"
import "../../assets/Home/search/recommendBlock.scss"
class ShowList extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div className={"recommend-block__list recommend-list"}>
                <ul className={'content'}>
                    {
                        this.props.shopList.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <div className={'show-icon'}>
                                        <NavLink to={'null'} className={'show-icon-a'}>
                                            <img src={v.pic} alt='' />
                                        </NavLink>
                                        <div  dangerouslySetInnerHTML={{__html: v.tag_icon}}></div>
                                    </div>
                                    <div className={"item-desc"}>
                                        <p className={'show-date'}>
                                            <strong>
                                                {
                                                    v.show_time_top
                                                }
                                            </strong>
                                            <span></span>
                                        </p>
                                        <NavLink to={'null'} className={'item-desc-a'} >
                                            <h3 className={' text-double'} dangerouslySetInnerHTML={{__html: v.name}}>
                                            </h3>
                                        </NavLink>
                                        <p className={'venue text-single'}>
                                            {v.city_name+' | '+v.venue_name}
                                        </p>
                                        <p className={'price'}>
                                            <strong className={'c_ff6'}>
                                                {v.min_price}
                                            </strong>
                                            <span>起</span>
                                        </p>
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ShowList