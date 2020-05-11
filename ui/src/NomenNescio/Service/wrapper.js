import axios from "axios";
import urls from "./urls";
const prefix="/nomen-nescio-api"
export function APIWrapper(method,urlKey,data){
    return axios[method](prefix+urls[urlKey],data).then(response=>{
        return response.data;
    })
}