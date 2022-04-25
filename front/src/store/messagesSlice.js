import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import messagesService from "../services/messagesService";

export const getAllMessages = createAsyncThunk(
    'messageSlice/getAllMessages',
    async (_,{rejectWithValue}) => {
        try {
            const messages = await messagesService.getAllMessages();
            return {messages}
        }catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const createMessage = createAsyncThunk(
    'messageSlice/createMessage',
    async (message,{rejectWithValue}) =>{
        try {
            const newMessage = await messagesService.createMessage(message);
            return {newMessage}
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const messageSlice = createSlice({
    name: 'messageSlice',
    initialState: {
        messages:[],
    },
    reducers: {},
    extraReducers:{
        [getAllMessages.fulfilled]: (state, action) => {
            state.messages = action.payload.messages
        },
        [createMessage.fulfilled]: (state, action) => {
            state.messages.push(action.payload.newMessage)
        }
    }
})

export const messageReducer = messageSlice.reducer;
