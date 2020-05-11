import { APIWrapper } from "../../Service/wrapper";
import { POST } from "../../Service/methods";

export function updateMessage(message,userId){
  return APIWrapper(POST, "message", { userId, message });
}