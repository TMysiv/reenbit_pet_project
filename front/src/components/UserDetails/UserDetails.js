import React from 'react';
import {useLocation} from "react-router-dom";

import check from '../../images/free-png.ru-39.png'
import logo from '../../images/Users-User-icon.png'
import css from './style.css';
import {MessagesForm} from "../MessagesForm/MessagesForm";
import Chatting from "../Chatting/Chatting";

const UserDetails = () => {

    const {state} = useLocation();
    const {id,name} = state;

    return (
        <div className={'details_wrap'}>

            <div className={'details_header'}>

                <div className={'details_header_logo'}>
                    <img src={logo} alt="logo" className={'logo'}/>
                    <img src={check} alt="check" className={'check'}/>
                </div>
                <h4>{name}</h4>

            </div>

            <div className={'details_medium'}>
                <Chatting id={id}/>
            </div>

            <div className={'details_bottom'}>
                <MessagesForm id={id}/>
            </div>
        </div>
    );
};

export {UserDetails};