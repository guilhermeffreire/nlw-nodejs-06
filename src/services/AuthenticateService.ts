import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

interface iAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({ email, password } : iAuthenticateRequest){
        
        //Verificar se email existe
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }
        
        //Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //Gerar token string token (guilhermenodenlwvaloriza)
        const token = sign({
            email: user.email
        }, "0ea2f9d76b7d437b163dc04b3d9f2abe", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }

