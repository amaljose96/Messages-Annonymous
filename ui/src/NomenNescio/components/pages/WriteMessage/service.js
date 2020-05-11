import { APIWrapper } from "../../../Service/wrapper";
import { POST } from "../../../Service/methods";
import { v4 as uuidv4 } from "uuid";

export function submitMessageService(from, to, content,themeScheme) {
  let message = {
    id: uuidv4(),
    sender: from,
    wall: to,
    time: Date.now(),
    text: content,
    senderPseudoName: "",
    themeScheme,
    state: "anonymous",
    deleted:false,
  };
  return APIWrapper(POST, "message", { userId: from, message });
}
