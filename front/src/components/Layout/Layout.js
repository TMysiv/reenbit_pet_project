import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../Users/Users";
import css from './style.css'
import Constants from "../Constants/Constants";

const Layout = () => {
    return (
        <div className={'wrap'}>
            <Constants/>
            <div className={'wrap_main'}>
                <Users/>
            </div>
            <div className={'wrap_outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};