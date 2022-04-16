import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../Users/Users";
import css from './style.css'

const Layout = () => {
    return (
        <div className={'wrap'}>
            <div className={'wrap_main'}>
                <Users/>
            </div>
            <div className={'wrap_outlet'}>
                dsadsadasl;dl;asd;a;ld
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};