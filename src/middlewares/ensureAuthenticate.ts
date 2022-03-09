import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad{
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, nextFunction: NextFunction){

    const authtoken = request.headers.authorization;

    if(!authtoken){
        return response.status(401).end();
    }

    const [,token] = authtoken.split(" ");
    
    try{
        const { sub } = verify(token, "0ea2f9d76b7d437b163dc04b3d9f2abe") as IPayLoad;
       
        request.user_id = sub

        return nextFunction();
    }catch(error){
        return response.status(401).end();
    }
          
}