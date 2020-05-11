import createReducer from "../common/createReducer";

var reducers = {
  SET_USER_DETAILS:(state,action)=>{
    return action.userDetails
  },
};

const initialState = {
  userId:"no-user"
};

export default createReducer(initialState, reducers);
