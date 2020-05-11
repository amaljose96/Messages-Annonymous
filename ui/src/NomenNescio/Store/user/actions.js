export const setUserDetails=(userDetails)=>{
    console.log("Setting User Details",userDetails);
    return (dispatch)=>{
        dispatch({
            type:"SET_USER_DETAILS",
            userDetails,
            segmentName:"user"
        });
    }
}