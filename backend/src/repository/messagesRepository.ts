import {EntityRepository, getManager, Repository} from "typeorm";

import {IMessages, Messages} from "../entity/messages";
import {usersRepository} from "./usersRepository";

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages>{
    public async createMessage(messages:IMessages):Promise<Messages>{
        const {userId} = messages;
        await usersRepository.updateLastMessage(userId);
        return getManager().getRepository(Messages).save(messages)
    }

    public async getAllMessages():Promise<IMessages[]>{
        return getManager().getRepository(Messages).find()
    }

}

export const messagsRepository = new MessagesRepository();