
export default function(state = {}, action) {
    if(action.type === 'SEARCH_ALL_RESULTS'){
        state = {
            ...state,
            searchAllResults: action.data
        }
    }
    if(action.type === 'ERROR'){
        state = {
            ...state,
            error: action.error
        }
    }
  
    if(action.type === 'REGISTERED_USER' || action.type === 'LOGIN_USER'){
        state = {
            ...state,
            email: action.email
        }
    }
  

    return state;
}

