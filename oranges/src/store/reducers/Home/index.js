import homeType from '../../actionType/Home'
import inisState from '../../state/Home'
export default (state=inisState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    switch(type){
        case homeType.UP_CLASSIFY_HOME:
            state.ClassifyHome = payload;
            break; 
        case homeType.UP_VIP_SCHEDULAR:
            state.vipHomeSchedular = payload;
            break; 
        case homeType.UP_HOT_SRECOMMEND:
            state.HotsShowlist= payload;
            break; 
        case homeType.UP_TOUR_RECOMMEND:
            state.Tourshowlist= payload;
            break;
        case homeType.UP_FLOOR_SHOW:
            state.floorshow=payload;
            break; 
        case homeType.UP_HOT_THEATRE:
            state.Hotheatre=payload;
            break;     
        case homeType.UP_RECOMMEND_LIST:
            state.recommendlist= state.recommendlist.concat(payload);
            break;
        default:
            break;
    }
    return state
}