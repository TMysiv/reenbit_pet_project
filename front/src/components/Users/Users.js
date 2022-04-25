import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import css from './style.css';
import {User} from "../User/User";
import logo from '../../images/Users-User-icon.png';
import check from '../../images/free-png.ru-39.png';
import usersService from "../../services/usersService";

const Users = () => {
    const {handleSubmit,register} = useForm();

    const [users,setUsers] = useState([]);
    const [value,setValue] = useState('');

    useEffect(()=>{
        usersService.getAllUsers().then(users => {
            const sortUsers = users.slice().sort((b, a) => b.lastMessage - a.lastMessage);
            setUsers(sortUsers)
        })
    },[])

    const filterUsers = (data) => {
        setValue(data.search)
    }

    const usersFromFilter = users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))

    return (
        <div className={'main'}>

            <div className={'main_header'}>

                <div className={'main_header_logo'}>
                    <img className={'logo'} src={logo} alt='logo'/>
                    <img className={'check'} src={check} alt='check'/>
                </div>

                <form onChange={handleSubmit(filterUsers)}>
                    <input type="search" placeholder={'Search or start new chat'} {...register('search')}/>
                </form>

            </div>

            <div className={'main_bottom'}>

                <h2>Chats</h2>
                <div className={'main_bottom_user'}>
                        {usersFromFilter.map(user => <User key={user.id} user={user}/>)}
                </div>

            </div>
        </div>
    );
};

export {Users};