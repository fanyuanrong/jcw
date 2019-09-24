import React from "react"
import {NavLink} from "react-router-dom"
import "../../assets/Home/search/recommendBlock.scss"
class Correlation extends React.Component{
    render() {
        return(
            <div>
                <div style={{wdith:"100%",marginTop:".4rem"}}>
                    <img style={{width:"100x",height:"70px",margin:"0 auto"}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACCCAYAAADv7uKCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjc4Nzk3RTU2QkQxMUU5OTQ0M0UwMjcwNjA5RTgwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjc4Nzk3RjU2QkQxMUU5OTQ0M0UwMjcwNjA5RTgwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyNzg3OTdDNTZCRDExRTk5NDQzRTAyNzA2MDlFODBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyNzg3OTdENTZCRDExRTk5NDQzRTAyNzA2MDlFODBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yOp7CgAAE5JJREFUeNrsnQlwFOl1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"}/>
                    <h2>暂无相关内容</h2>
                </div>
                <div className={"recommend-block recommend-wrap"}>
                    <div className={'recommend-block__wrap'}>
                        <h3 className={'recommend-block__wrap__title'}>
                            为你推荐
                        </h3>
                    </div>
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
                </div>
            </div>
        )
    }
}
export default Correlation