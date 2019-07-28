const default_state = {
  userDropdownStatus: "hide",
  showLoginModal: false,
  showAddCollectionModal: false,
  words: [],
  userCollections: []
};

export default function(state = { ...default_state }, action) {
  if (action.type === "SEARCH_ALL_RESULTS") {
    state = {
      ...state,
      searchAllResults: action.data
    };
  }
  if (action.type === "ERROR") {
    state = {
      ...state,
      error: action.error
    };
  }

  if (action.type === "LOGIN_USER") {
    state = {
      ...state,
      email: action.email,
      userCollections: action.collections,
      words: action.words
    };
  }

  if (action.type === "LOGOUT_USER") {
    state = {
      ...state,
      email: null,
      userCollections: [],
      words: []
    };
  }

  if (action.type === "LOGIN_MODAL_STATE") {
    state = {
      ...state,
      showLoginModal: action.newState
    };
  }

  if (action.type === "NEW_COLLECTION_MODAL_STATE") {
    state = {
      ...state,
      showAddCollectionModal: action.newState
    };
  }

  if (action.type === "USER_DROPDOWN_STATUS_CHANGE") {
    const newStatus = action.status
      ? action.status
      : state.userDropdownStatus === "hide"
      ? ""
      : "hide";
    state = {
      ...state,
      userDropdownStatus: newStatus
    };
  }

  if (action.type === "ADDED_ITEM_TO_COLLECTION") {
    state = {
      ...state,
      words: [...state.words, action.payload]
    };
  }

  if (action.type === "NEW_COLLECTION") {
    state = {
      ...state,
      userCollections: [...state.userCollections, action.payload]
    };
  }

  if (action.type === "USER_DATA") {
    state = {
      ...state,
      email: action.email,
      words: action.words,
      userCollections: action.collections
    };
  }

  if (action.type === "JWT_LOGIN") {
    state = {
      ...state,
      email: action.email
    };
  }

  return state;
}
