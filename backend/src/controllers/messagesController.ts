import {Request,Response} from 'express';

import {IMessages} from "../entity/messages";
import {messagsRepository} from "../repository/messagesRepository";


class MessagesController{
    public async createMessage(req:Request,res:Response):Promise<Response<IMessages>>{
       const newMessage = await messagsRepository.createMessage(req.body)
        return res.status(201).json(newMessage)
    }

    public async getAllMessages(req:Request,res:Response):Promise<Response<IMessages[]>>{
        const messages = await messagsRepository.getAllMessages();
        return res.status(201).json(messages);
    }

}

export const messagesController = new MessagesController();