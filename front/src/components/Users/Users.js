import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import css from './style.css';
import {User} from "../User/User";
import logo from '../../images/Users-User-icon.png';
import check from '../../images/free-png.ru-39.png';

const Users = () => {
    const {users} = useSelector(state => state['userReducer']);
    const {handleSubmit,register} = useForm();

    //sort users by time of last message received
    const sortedOfLastMessageUsers = users.slice().sort((b, a) => b.lastMessage - a.lastMessage);

    const [usersFromFilter,setUsersFromFilter] = useState(sortedOfLastMessageUsers);

    //filter user if we receive something in input(search)
    const filterUsers = (data) => {
        let filterArray = [...sortedOfLastMessageUsers];
        if (data.search) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.search.toLowerCase()));
        };
        setUsersFromFilter(filterArray);
    }

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