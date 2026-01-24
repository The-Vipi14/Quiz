import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
    withCredentials:true
})


export const getAllUser = api.get('/owner/all-users')
export const getAllCreator = api.get('/owner/all-creator')
export const getAllQuizzes = api.get('/owner/all-quizzes')
