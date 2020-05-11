import styled from "styled-components";

export const AppBodyContainer = styled.div`
    height:calc(100vh - 50px);
    margin-top:50px;
    filter:${props=>props.blur?"blur(5px)":"none"};
`;