import axios from "axios";
const baseURL = 'https://api.chucknorris.io/jokes/random'

const axiosService = axios.create({
    baseURL
});

const answerService = {
    getAnswer: () => axiosService.get().then(value => value.data)
}

export default answerService;