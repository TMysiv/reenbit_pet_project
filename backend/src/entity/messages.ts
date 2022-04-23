import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";

import {CommonFields, ICommonFields} from "./commonFields";
import {Users} from "./users";

export interface IMessages extends ICommonFields{
    userId:number,
    text: string,
    date: string,
    fullTime: string,
    messageFromApi?: string
}
@Entity('Messages', {database: 'reenbit'})
export class Messages extends CommonFields implements IMessages{

    @Column({
        type: 'int',
        nullable: false,
    })
        userId: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        date: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        fullTime: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        messageFromApi?: string;

    @ManyToOne( ()=>Users, (user)=>user.message)
    @JoinColumn({ name: 'userId' })
    user: Users;
}