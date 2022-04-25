import axiosService from "./axiosService";

const usersService = {
    getAllUsers: ()=> axiosService.get('/users').then(value => value.data).then(value => value)
}

export default usersService;