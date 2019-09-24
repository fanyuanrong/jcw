import initState from "../../state/search"
import searchType from "../../actionType/search"
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state))
    switch (type) {
        case searchType.UP_SEARCH:
            state.SearchList = payload;
            break;
    }
    return state
}