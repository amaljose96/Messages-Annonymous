import React from "react";
import {
  MessageContainer,
  MessageHeader,
  MessageDetails,
  MessageSender,
  MessageTime,
  MessageActions,
  MessageAction,
  MessageContent,
} from "./styles";
import ShowIcon from "../../Resources/close.png";
import DeleteIcon from "../../Resources/close.png";
import PrivacyIcon from "../../Resources/close.png";
import ReportIcon from "../../Resources/close.png";
import { getColor } from "../../colors";
import { Context } from "../../Store";
import { updateMessage } from "./service";
import { setUserDetails } from "../../Store/user/actions";
var sample = {
  id: "dad9660c-4faf-4e86-8fb6-5ab18af086f4",
  sender: "5b7c93b9-2a5f-4836-9407-f769d91db606",
  senderPseudoName: "",
  state: "anonymous",
  text: "test",
  time: 1589237106608,
  wall: "asodn1",
  deleted: false,
};
function Message({ message }) {
  const { state, dispatch } = React.useContext(Context);
  let colors = getColor({
    ...state.user.colorConfig,
    scheme: message.themeScheme,
  });

  function revealSender() {
    let senderName = "Amal";
    let updatedMessage = {
      ...message,
      state: "public",
      senderPseudoName: senderName,
    };
    updateMessage(updatedMessage, state.user.id).then((response) => {
      setUserDetails(response)(dispatch);
    });
  }
  function revealMyself() {
    let updatedMessage = {
      ...message,
      state: "disclosed",
    };
    updateMessage(updatedMessage, state.user.id).then((response) => {
      setUserDetails(response)(dispatch);
    });
  }
  function deleteMessage() {
    let updatedMessage = {
      ...message,
      deleted: true,
    };
    updateMessage(updatedMessage, state.user.id).then((response) => {
      setUserDetails(response)(dispatch);
    });
  }
  return (
    <MessageContainer colors={colors} deleted={message.deleted}>
      <MessageHeader>
        <MessageDetails>
          <MessageSender>
            {message.state === "anonymous" || message.state === "disclosed"
              ? "Anonymous"
              : message.senderPseudoName}
            ({message.state})
          </MessageSender>
          <MessageTime>{new Date(message.time).toISOString()}</MessageTime>
        </MessageDetails>
        <MessageActions>
          {message.state === "disclosed" && state.user.id === message.wall && (
            <MessageAction title={"Dislose sender"} src={ShowIcon} onClick={()=>revealSender()}/>
          )}
          {message.state === "anonymous" &&
            state.user.id === message.sender && (
              <MessageAction title={"Reveal Yourself"} src={DeleteIcon} onClick={()=>revealMyself()}/>
            )}
          {message.state !== "deleted" && state.user.id === message.wall && (
            <MessageAction title={"Delete Message"} src={DeleteIcon}  onClick={()=>deleteMessage()}/>
          )}
          <MessageAction title={"Report"} src={ReportIcon}  onClick={()=>{}}/>
        </MessageActions>
      </MessageHeader>
      <MessageContent colors={colors}>{message.text}</MessageContent>
    </MessageContainer>
  );
}
export default Message;
