import axios from "axios";

axios.defaults.headers.post["x-access-token"] = localStorage.getItem("jwtoken");

export async function searchAll(searchInput) {
  const { data } = await axios.get("/api/search/" + searchInput);
  if (Array.isArray(data)) {
    return {
      type: "SEARCH_ALL_RESULTS",
      data
    };
  } else {
    return {
      type: "ERROR",
      error: "searchAll failed"
    };
  }
}

export async function loginRegister(userDetsObject, registering) {
  let response;
  if (registering) {
    response = await axios.post("/api/register", userDetsObject);
  } else {
    response = await axios.post("/api/login", userDetsObject);
  }
  const { data } = response;
  if (data.error) {
    return {
      type: "ERROR",
      error: data.error
    };
  } else {
    localStorage.setItem("jwtoken", data.token);
    axios.defaults.headers.common["x-access-token"] = localStorage.getItem(
      "jwtoken"
    );
    console.log(data);

    return {
      type: "LOGIN_USER",
      email: data.email,
      words: data.words,
      collections: data.collections
    };
  }
}

export async function getData() {
  const { data } = await axios.get("/api/data");
  if (data.error) {
    return {
      type: "ERROR",
      error: data.error
    };
  } else {
    return {
      type: "USER_DATA",
      email: data.email,
      words: data.words,
      collections: data.collections
    };
  }
}

export function logout() {
  localStorage.removeItem("jwtoken");
  return {
    type: "LOGOUT_USER"
  };
}

export function setLoginModalState(newState) {
  return {
    type: "LOGIN_MODAL_STATE",
    newState
  };
}

export function setAddCollectionModalState(newState) {
  return {
    type: "NEW_COLLECTION_MODAL_STATE",
    newState
  };
}

export async function checkJWT() {
  const token = localStorage.getItem("jwtoken");
  if (token) {
    axios.defaults.headers.common["x-access-token"] = token
    const { data } = await axios.get("/api/data");
    if (data.error) {
      console.log('here');
      
      return {
        type: "ERROR",
        error: data.error
      };
    } else {
      console.log(data);
      
      return {
        type: "LOGIN_USER",
        email: data.email,
        words: data.words,
        collections: data.collections
      };
    }
  }
}

export async function changeCollection(action, payload) {
  console.log(action, payload);
  const { data } = await axios.post("/api/update", { action, payload });
  console.log(data);
  // need to check if payload is correct format
  if(action === 'save_word'){
    return {
      type: "ADDED_ITEM_TO_COLLECTION",
      payload
    }
  }else if(action === 'add_collection'){
    return {
      type: "NEW_COLLECTION",
      payload
    }
  }

}

export function showHideUserDropdown(newStatus) {
  return {
    type: "USER_DROPDOWN_STATUS_CHANGE",
    status: newStatus
  };
}
