import {Column, Entity, OneToMany} from "typeorm";

import {CommonFields, ICommonFields} from "./commonFields";
import {IMessages, Messages} from "./messages";

export interface IUsers extends ICommonFields{
    name:string,
    photo:string,
    lastMessage:number,
    message:IMessages[]
}

@Entity('Users', {database: 'reenbit'})
export class Users extends CommonFields implements IUsers{

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    photo: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    lastMessage: number;

    @OneToMany( ()=> Messages, (message)=> message.user)
    message:Messages[]
}
