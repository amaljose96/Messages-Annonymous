import { APIWrapper } from "../../../Service/wrapper";
import { POST } from "../../../Service/methods";

export function submitMessageService(from,to,content){
    return APIWrapper(POST,"newMessage",{
        from,
        to,
        content
    })
}