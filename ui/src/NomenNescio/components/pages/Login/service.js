import { APIWrapper } from "../../../Service/wrapper";
import { POST } from "../../../Service/methods";

export function createUserService(userData){
    return APIWrapper(POST,"one-and-only",{
        userId:userData.id,
        data:userData})
}