import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 500px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 1px ${(props) => props.colors.text};
  opacity:${props=>props.deleted?"0.5":"1"};
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:10px;
`;
export const MessageDetails = styled.div``;
export const MessageSender = styled.div`
  font-size: 18px;
`;
export const MessageTime = styled.div`
  font-size: 11px;
`;
export const MessageActions = styled.div``;
export const MessageAction = styled.img`
    height:30px;
    width:30px;
    margin:5px;
`;
export const MessageContent = styled.div`
  font-size: 14px;
  margin:5px;
  padding:10px;
  max-height:200px;
  overflow-y:scroll;
  background-color:${props=>props.colors.text}11;
`;
