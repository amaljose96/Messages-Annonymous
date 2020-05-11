export const setUserDetails=(userDetails)=>{
    console.log("Setting User Details",userDetails);
    window.localStorage.setItem("NN",JSON.stringify(userDetails))
    return (dispatch)=>{
        dispatch({
            type:"SET_USER_DETAILS",
            userDetails,
            segmentName:"user"
        });
    }
}