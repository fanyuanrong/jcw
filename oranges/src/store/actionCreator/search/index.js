import searchType from "../../actionType/search"
import axios from "axios"
const getSearchList = function(payload){
    return {
        type:searchType.UP_SEARCH,
        payload
    }
}
export default {
    getSearchList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/Mjcw/Search/getHotWord?version=6.0.3&referer=2');
            dispatch(getSearchList(data))
        }
    }
}