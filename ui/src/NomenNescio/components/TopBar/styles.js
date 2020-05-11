import styled from "styled-components";
import { getColor } from "../../colors";

export const TopBarContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0px 30px;
    color:${props=>getColor(props.colors).background};
    background:${props=>getColor(props.colors).text};
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:50px;
`;
export const Section=styled.div`
    display:flex;
    align-items:center;
`;
export const BurgerMenu=styled.img`
    height:30px;
    width:30px;
    margin-right:50px;
`;