import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSendComplimentsService{
    async execute(user_id: string){
        const complimentRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = complimentRepository.find({
            where: {
                user_sender: user_id
            }
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService }