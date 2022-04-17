import React from 'react';

import css from './style.css';
import {urls} from "../../constans";

const User = ({user: {name, messages}}) => {

    return (
        <div className={'user'}>
            <div className={'user_header'}>
                <div className={'user_logo'}>

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
    );
};

export {User};