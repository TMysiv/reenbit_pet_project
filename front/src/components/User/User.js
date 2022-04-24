import React from 'react';
import {Link} from "react-router-dom";

import css from './style.css';
import logo from '../../images/Users-User-icon.png';
import check from '../../images/free-png.ru-39.png';
import {useSelector} from "react-redux";

const User = ({user}) => {
    console.log(user)
    const {id,name} = user;


    const {messages} = useSelector(state => state['userReducer']);

    const userMessages = messages.filter(message => message.userId === id);

    return (
            <Link to={`user=${name}`} state={user} >
        <div className={'user'}>
                <div className={'user_header'}>

                    <div className={'user_logo'}>
                        <img className={'logo'} src={logo} alt="logo"/>
                        <img className={'check'} src={check} alt='check'/>
                    </div>

                    <div className={'user_message'}>
                        <h4>{name}</h4>
                        {userMessages[userMessages.length-1].text}
                    </div>

                </div>

                <div className={'user_date'}>
                    {userMessages[userMessages.length-1].date}
                </div>

        </div>
            </Link>
    );
};

export {User};