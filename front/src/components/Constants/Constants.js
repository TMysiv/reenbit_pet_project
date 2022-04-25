import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {getAllMessages} from "../../store/messagesSlice";

const Constants = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllMessages())
    },[])

    return (
        <div>

        </div>
    );
};

export {Constants};