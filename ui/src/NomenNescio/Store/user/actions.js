export const setUserDetails=(userDetails)=>{
    return (dispatch)=>{
        dispatch({
            type:"SET_USER_DETAILS",
            userDetails,
            segmentName:"user"
        });
    }
}