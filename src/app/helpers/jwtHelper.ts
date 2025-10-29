import { Sign } from "crypto";
import  jwt, { Secret, SignOptions } from "jsonwebtoken";


const generateToken =(payload:any,secret:Secret,expiresIn:string)=>{
     const  token =  jwt.sign(payload,secret,{
            algorithm:"HS256",
            expiresIn
        } as SignOptions
    )
    return token

   
        
       
}
 const verifyToken =(token:string,secret:Secret)=>{
        return jwt.verify(token,secret) as Jwtpayload
    }
export const jwtHelper ={
    generateToken ,
    verifyToken
}