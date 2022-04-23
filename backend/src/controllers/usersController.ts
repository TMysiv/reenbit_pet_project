import {Request, Response} from "express";
import {IUsers} from "../entity/users";
import {usersRepository} from "../repository/usersRepository";

class UsersController{
    public async getAllUsers(req:Request,res:Response):Promise<Response<IUsers>>{
       const users = await usersRepository.getAllUsers();
       return res.status(200).json(users);
    }

}

export const usersController = new UsersController();