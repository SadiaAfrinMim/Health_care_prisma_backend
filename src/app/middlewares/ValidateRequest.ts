import { Request, Response,NextFunction } from "express";
import { ZodObject } from "zod";
import { UserValidation } from './../modules/user/user.validation';

const validatedRequest = (schema:ZodObject) =>async(  req:Request, res:Response, next:NextFunction)=>{
    try {
        await schema.parseAsync({
            body:req.body
        })
        return next
        
    } catch (err) {
        next(err)
        
    }
}

