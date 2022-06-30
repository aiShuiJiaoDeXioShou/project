import Axios from "axios";
import Cookies from "js-cookie";
import Url from './Url';


export function SendReq(param){
    console.log(Cookies.get("user_id"));
    return Axios.create({
        url: param.url?Url.URL.baseUrl+param.url:"",
        method: param.method?param.method:'post',
        data: param.data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':Cookies.get("user_id")
        }
    }).request()
}
