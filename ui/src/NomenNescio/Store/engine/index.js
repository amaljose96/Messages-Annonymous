import createReducer from "../common/createReducer";

var reducers = {
  SET_PROPERTY: (state, action) => {
      return{
        ...state,
        applicationProperties:{
          ...state.applicationProperties,
          [action.property]:action.value
        }
      }
  },
  OPEN_MENU:(state,action) =>{
    return {
      ...state,
      menuOpen:true
    }
  },
  CLOSE_MENU:(state,action) =>{
    return {
      ...state,
      menuOpen:false
    }
  }
};

const initialState = {
  applicationProperties:{
  },
  menuOpen:false
};

export default createReducer(initialState, reducers);
