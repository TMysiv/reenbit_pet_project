import React, {useState} from 'react';
import {useSelector} from "react-redux";

import css from './style.css'

const Chatting = ({id}) => {

    const {messages} = useSelector(state => state['messageReducer'])

    const messageFromUser  = messages.filter(message => message.userId === id);

    return (
        <div>
            {messageFromUser.map(message => <div key={message.id} className={'text'}>{message.text}</div>)}
        </div>
    );
};

export default Chatting;