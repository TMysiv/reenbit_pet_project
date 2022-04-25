import {configureStore} from '@reduxjs/toolkit';

import {messageReducer} from "./messagesSlice";

const store = configureStore({
    reducer:{
        messageReducer
    }
})

export default store;