import {EntityRepository, getManager, Repository} from "typeorm";

import {IUsers, Users} from "../entity/users";

@EntityRepository(Users)
class UsersRepository extends Repository<Users>{
    public async getAllUsers():Promise<IUsers[]>{
        return getManager().getRepository(Users).createQueryBuilder('user')
            .leftJoin('Messages','messages','messages.userId = user.id')
            .getMany();
    }

    public async updateLastMessage(userId:number){
        const lastMessage = new Date().getTime();
       return getManager().getRepository(Users).update({id: userId},{lastMessage})
    }

}

export const usersRepository = new UsersRepository();