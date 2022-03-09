import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";



export async function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction){

    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);
    
    const { admin } = await usersRepositories.findOne(user_id)    

    if(admin){
        return nextFunction();
    }

    return response.status(401).json({
        error: "User is not admin"
    });
}