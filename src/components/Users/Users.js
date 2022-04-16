import React from 'react';
import {useSelector} from "react-redux";

import css from './style.css';
import logo from '../../images/Users-User-icon.png';

const Users = () => {
    const {users} = useSelector(state => state['userReducer']);

    return (
        <div className={'main'}>
            <div className={'main_header'}>
                <div className={'main_header_logo'}>
                    <img src={logo} alt={logo}/>
                </div>
                <form>
                    <input type="search" placeholder={'Search or start new chat'} name={'search'}/>
                </form>
            </div>
            <div className={'main_bottom'}>

            </div>
        </div>
    );
};

export {Users};