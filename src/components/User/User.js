import React from 'react';
import {Link} from "react-router-dom";

import css from './style.css';
import logo from '../../images/Users-User-icon.png';
import check from '../../images/free-png.ru-39.png';

const User = ({user}) => {

    const {id,name,messages} = user;

    return (
            <Link to={id.toString()} state={user} >
        <div className={'user'}>
                <div className={'user_header'}>

                    <div className={'user_logo'}>
                        <img className={'logo'} src={logo} alt="logo"/>
                        <img className={'check'} src={check} alt='check'/>
                    </div>

                    <div className={'user_message'}>
                        <h4>{name}</h4>
                        {messages[messages.length-1].text}
                    </div>

                </div>

                <div className={'user_date'}>
                    {messages[messages.length-1].date}
                </div>

        </div>
            </Link>
    );
};

export {User};