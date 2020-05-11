export const setProperty=(property,value)=>{
    return (dispatch)=>{
        dispatch({
            type:"SET_PROPERTY",
            property,
            value,
            segmentName:"engine"
        });
    }
}
export const openMenu=()=>{
    return (dispatch)=>{
        dispatch({
            type:"OPEN_MENU",
            segmentName:"engine"
        });
    }
}
export const closeMenu=()=>{
    return (dispatch)=>{
        dispatch({
            type:"CLOSE_MENU",
            segmentName:"engine"
        });
    }
}