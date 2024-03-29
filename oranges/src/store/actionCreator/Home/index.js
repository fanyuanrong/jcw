import axios from 'axios';
import homeType from '../../actionType/Home'
const upClassifyHome =(payload)=>{//首页上部信息
    return {
        type:homeType.UP_CLASSIFY_HOME,
        payload
    }
};
const upVipSchedular=(payload)=>{//获取优先购票vip
    return{
        type:homeType.UP_VIP_SCHEDULAR,
        payload
    }
}
const upHotsRecommend=(payload)=>{//获取热门演出
    return{
        type:homeType.UP_HOT_SRECOMMEND,
        payload
    }
}
const upTourRecommmend=(payload)=>{//巡回演出
    return{
        type:homeType.UP_TOUR_RECOMMEND,
        payload  
    }
}
const upFloorshow=(payload)=>{//各种会
    return{
        type:homeType.UP_FLOOR_SHOW,
        payload
    }
}
const upHoTheatre=(payload)=>{//热门场馆
    return{
        type:homeType.UP_HOT_THEATRE,
        payload
    }
}
const uprecommendlist=(payload)=>{//相关推荐
    return{
        type:homeType.UP_RECOMMEND_LIST,
        payload  
    }
}
export default{
    getClassifyHome({city_id,city_abridge}){//获取上部信息
        return async (dispatch)=>{
            const {data} = await axios.get(`/Apijcw/home/index/getClassifyHome?city_id=${city_id}&abbreviation=${city_abridge}&version=6.0.3&referer=2`);
            dispatch(upClassifyHome(data))
        }
    },
    getVipHomeSchedular(){//获取优先购票vip
        return async(dispatch)=>{
            const {data}=await axios.get('/Apijcw/vip/index/getVipHomeSchedular?version=6.0.5&referer=2')
            dispatch(upVipSchedular(data))
        }
    },
    getHotsRecommendList(){//热门演出列表
        return async (dispatch)=>{
            const {data}=await axios.get("/Apijcw/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=2")
            dispatch(upHotsRecommend(data))
        }
    },
    getTourRecommendList(){//巡回演出
        return async (dispatch)=>{
            const {data}= await axios.get('/Apijcw/home/index/getTourRecommendList?city_id=0&version=6.0.5&referer=2')
            dispatch(upTourRecommmend(data))
        }
    },
    getFloorShow(){//各种会
        return async (dispatch)=>{
            const {data}= await axios.get('/Apijcw/home/index/getFloorShow?city_id=0&version=6.0.5&referer=2')
            dispatch(upFloorshow(data))
        }
    },
    getHoTheatre(){
        return async (dispatch)=>{
            const {data}= await axios.get('/Apijcw/home/index/getHotTheatre?version=6.0.5&referer=2')
            dispatch(upHoTheatre(data.theatre_list))
        }
    },
    getRecommendList({page}){//相关推荐
        return async (dispatch)=>{
            const {data}= await axios.get(`/Apijcw/home/index/getRecommendShow?cityAdd=&page=${page}&version=6.0.5&referer=2`)
            dispatch(uprecommendlist(data.recommend_show_list))
        }
    }
}