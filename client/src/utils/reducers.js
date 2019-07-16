
export default function(state = {}, action) {
    if(action.type === 'SEARCH_ALL_RESULTS'){
        state = {
            ...state,
            searchAllResults: action.data
        }
    }
  
    return state;
  }