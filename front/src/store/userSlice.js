import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import usersService from "../services/usersService";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_,{rejectWithValue}) => {
        try {
            const users = await usersService.getAllUsers();
            return {users}
        }catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users:[],
    },
    reducers: {},
    extraReducers:{
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload.users
        }
    }
})

export const userReducer = userSlice.reducer;

export const {createMessage} = userSlice.actions