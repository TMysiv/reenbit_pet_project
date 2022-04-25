import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../Users/Users";
import {Constants} from "../Constants/Constants";
import css from './style.css'

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