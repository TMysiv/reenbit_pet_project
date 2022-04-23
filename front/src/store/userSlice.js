import {createSlice} from '@reduxjs/toolkit';
import {messages, users} from "../constans";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users,
        messages
    },
    reducers:{
        createMessage: (state,action) =>{
            const user = users.find(user => user.id === action.payload.newMessage.userId);

            state.messages.push(action.payload.newMessage);
        }

    }
})

export const userReducer = userSlice.reducer;

export const {createMessage} = userSlice.actions