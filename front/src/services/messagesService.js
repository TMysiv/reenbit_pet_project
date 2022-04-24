import axiosService from "./axiosService";

import baseURL from "./urls";

const messagesService = {
    getAllMessages: () => axiosService.get('/messages').then(value => value.data),
    createMessage: (message) => axiosService.post('/messages',message).then(value => value.data).then(value => value)
}

export default messagesService;