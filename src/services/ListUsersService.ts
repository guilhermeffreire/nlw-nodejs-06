import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { classToPlain } from "class-transformer"

class ListUsersService{
    async execute(){
        const userRepositorie = getCustomRepository(UsersRepositories);

        const users = userRepositorie.find();

        return classToPlain(users);
    }
}

export { ListUsersService }