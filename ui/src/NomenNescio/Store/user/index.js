import createReducer from "../common/createReducer";

var reducers = {
  SET_USER_DETAILS:(state,action)=>{
    return action.userDetails
  },
};

const initialState = JSON.parse(window.localStorage.getItem("NN") || false) || {id:"no-user"};

export default createReducer(initialState, reducers);
