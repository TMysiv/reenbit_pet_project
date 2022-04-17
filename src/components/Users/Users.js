import React from 'react';
import {useSelector} from "react-redux";

import {User} from "../User/User";
import css from './style.css';
import logo from '../../images/Users-User-icon.png';
import check from '../../images/free-png.ru-39.png';

const Users = () => {
    const {users} = useSelector(state => state['userReducer']);

    return (
        <div className={'main'}>
            <div className={'main_header'}>
                <div className={'main_header_logo'}>
                    <img className={'logo'} src={logo} alt='logo'/>
                    <img className={'check'} src={check} alt='check'/>
                </div>
                <form>
                    <input type="search" placeholder={'Search or start new chat'} name={'search'}/>
                </form>
            </div>
            <div className={'main_bottom'}>
                <h2>Chats</h2>
                <div className={'main_bottom_user'}>
                    {users.map(user => <User key={user.id} user={user}/>)}
                </div>
            </div>
        </div>
    );
};

export {Users};