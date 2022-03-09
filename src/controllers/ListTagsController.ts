import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagServices";

class ListTagsContoller{
    async handle(request: Request, response: Response){
        const listTagsService = new ListTagService();

        const listTags = await listTagsService.execute();

        return response.json(listTags);
    }
}


export { ListTagsContoller }