import axiosService from "./axiosService";

import baseURL from "./urls";

const usersService = {
    getAllUsers: ()=> axiosService.get('/users').then(value => value.data).then(value => value)
}

export default usersService;