import styled from 'styled-components';
import { getColor } from './colors';
export const NomenNescioContainer=styled.div`
    color:${props=>getColor(props.colors).text};
    background:${props=>getColor(props.colors).background};
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    transition: all 0.2s;
    overflow-y:scroll;
`;