import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import {createMessage} from "../../store/messagesSlice";
import answerService from "../../services/answerService";

dayjs.extend(utc)

const MessagesForm = ({id}) => {

    const dispatch = useDispatch();
    const {handleSubmit, register, reset} = useForm();

    //create different times
    const date = dayjs().utc().format('MMM DD,YYYY');
    const fullTime = dayjs().utc().format('M/D/YY, HH:mm A');

    //send Message
    const sendMessage = (data) => {
        if (data.message.length < 1) {
            console.log('no message');
            return;
        }
        const message = {userId: id, text: data.message, date, fullTime}
        dispatch(createMessage({message}))
        reset()

        setTimeout(()=>{
            answerService.getAnswer().then(answer => {
                const message = {userId: id, text: answer.value, date, fullTime, messageFromApi: 'yes'}
                dispatch(createMessage({message}))
            })
          },3000)
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