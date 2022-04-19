import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

import {createMessage} from "../../store";

dayjs.extend(utc)

const MessagesForm = ({id}) => {

    const {users,messages} = useSelector(state => state['userReducer']);
    console.log(users,messages)

    const dispatch = useDispatch();

    const {handleSubmit, register, reset} = useForm();

    //create different times
    const date = dayjs().utc().format('MMM DD,YYYY');
    const fullTime = dayjs().utc().format('M/D/YY, HH:MM A');
    const lastMessage = new Date().getTime();

    //send Message
    const sendMessage = (data) => {
        if (data.message.length < 1) {
            console.log('no message');
            return;
        }
        const newMessage = {userId: id, text: data.message, date, fullTime}
        dispatch(createMessage({newMessage,lastMessage}))

        reset();
    }

    return (
        <div>

            <form onSubmit={handleSubmit(sendMessage)}>
                <input type="text" placeholder={'Type your message'} {...register('message')}/>
                <button type={'submit'}></button>
            </form>

        </div>
    );
};

export {MessagesForm};