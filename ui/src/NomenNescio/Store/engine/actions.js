export const setProperty=(property,value)=>{
    return {
        type:"SET_PROPERTY",
        property,
        value,
        segmentName:"engine"
    }
}
export const openMenu=()=>{
    return {
        type:"OPEN_MENU",
        segmentName:"engine"
    }
}
export const closeMenu=()=>{
    return {
        type:"OPEN_MENU",
        segmentName:"engine"
    }
}