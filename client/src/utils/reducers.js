
const default_state = {
    userDropdownStatus: 'hide', 
    showLoginModal: false, 
    userCollection: [],
    userCollections: ['1','2','3']
}

export default function(state = {...default_state}, action) {
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

    if(action.type === 'LOGOUT_USER'){
        state = {
            ...state,
            email: null,
            userDropdownStatus: 'hide'
        }
    }

    if(action.type === 'LOGIN_MODAL_STATE'){
        state = {
            ...state,
            showLoginModal: action.newState
        }
    }
  
    if(action.type === 'USER_DROPDOWN_STATUS_CHANGE') {
        const newStatus = action.status 
            ? action.status
            : state.userDropdownStatus === 'hide' ? '' : 'hide'
        state = {
            ...state,
            userDropdownStatus: newStatus
        }
    }

    if(action.type === 'ADDED_ITEM_TO_COLLECTION') {
        state = {
            ...state,
        }
        state.userCollection.push(action.payload)
    }
    return state;
}

