import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";

class CreateTagService{
    async execute(name: string){
        const tagRepositories = getCustomRepository(TagRepositories);        

        if(!name){
            throw new Error("Tag Name Incorrect!");
        }

        const nameAlreadyExists = await tagRepositories.findOne({
            name
        });

        if(nameAlreadyExists){
            throw new Error("Tag Name already exists");
        }

        const tag = tagRepositories.create({ name });

        await tagRepositories.save(tag);

        return tag;        

    }
}

export { CreateTagService }