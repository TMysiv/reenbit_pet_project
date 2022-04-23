import {Request,Response} from 'express';

import {Messages} from "../entity/messages";
import {messagsRepository} from "../repository/messagesRepository";

class MessagesController{
    public async createMessage(req:Request,res:Response):Promise<Response<Messages>>{
       const newMessage = await messagsRepository.createMessage(req.body)
        return res.status(201).json(newMessage)
    }

}

export const messagesController = new MessagesController();