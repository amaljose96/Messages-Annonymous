import React from "react";
import { WriteMessageContainer } from "./styles";
import {useHistory} from 'react-router-dom';
function WriteMessage() {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  let history=useHistory();
  if(!searchParams.get("refer")){
    history.replace("/wall");
  }
  return <WriteMessageContainer>WriteMessage</WriteMessageContainer>;
}
export default WriteMessage;