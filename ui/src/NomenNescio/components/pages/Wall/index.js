import React from "react";
import { WallContainer, WallHeader,WallTitle, WallMessagesList } from "./styles";
import { Context } from "../../../Store";
import Message from "../../Message";
import ShareThis from "./ShareThis";

function Wall() {
  const { state } = React.useContext(Context);
  let userId =
    new URLSearchParams(new URL(window.location.href).search).get("user") ||
    state.user.id;
  if(!state.user.messages){
    return (
      <WallContainer>
        <WallHeader>
          <WallTitle>Wall of {userId}</WallTitle>
          <ShareThis/>
        </WallHeader>
        <WallMessagesList>
         This wall is empty
        </WallMessagesList>
      </WallContainer>
    );
  }
  return (
    <WallContainer>
      <WallHeader>
        <WallTitle>Wall of {userId}</WallTitle>
        <ShareThis/>
      </WallHeader>
      <WallMessagesList>
        {Object.values(state.user.messages[userId]).map((message) => {
          return <Message message={message} />;
        })}
      </WallMessagesList>
    </WallContainer>
  );
}
export default Wall;
