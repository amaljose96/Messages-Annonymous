import React from "react";
import {
  WriteMessageContainer,
  WriteMessageOrder,
  MessageInput,
  ButtonContainer,
} from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../common/Button";
import { submitMessageService } from "./service";
import { Context } from "../../../Store";
import { setUserDetails } from "../../../Store/user/actions";
function WriteMessage() {
  const { state, dispatch } = React.useContext(Context);
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  let history = useHistory();
  if (!searchParams.get("refer")) {
    history.replace("/wall");
  }
  let refer = searchParams.get("refer");
  const [referName, setReferName] = React.useState(false);
  const [messageContent, setMessageContent] = React.useState("");

  React.useEffect(() => {
    setReferName("Amal");
  }, []);

  function submitMessage() {
    submitMessageService(state.user.id, refer, messageContent,(state.user.colorConfig || {}).scheme || 0).then(
      (response) => {
        setUserDetails(response)(dispatch);
        history.push("/wall?user="+refer);
      }
    );
  }

  if (!referName) {
    return "Loading";
  }
  return (
    <WriteMessageContainer>
      <WriteMessageOrder>
        Enter your feedback for {referName}:
      </WriteMessageOrder>
      <MessageInput value={messageContent} onChange={(e)=>{setMessageContent(e.target.value)}}/>
      <ButtonContainer>
        <Button
          onClick={() => {
            submitMessage();
          }}
        >
          Submit
        </Button>
      </ButtonContainer>
    </WriteMessageContainer>
  );
}
export default WriteMessage;
