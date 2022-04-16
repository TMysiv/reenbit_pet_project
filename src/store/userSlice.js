import {createSlice} from '@reduxjs/toolkit';
import {users} from "../constans";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users,
    },
    reducers:{

    }
})

export const userReducer = userSlice.reducer;
