import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const getToalNoUserQuizCreators = () => api.get('/owner/total');
export const getQuizGrowthData = () => api.get('/owner/QuizGrowth');
export const getTechWiseQuizData = () => api.get('/owner/TechWiseQuizCount');
export const getAllUsers = () => api.get('/owner/all-users');
export const getAllCreators = () => api.get('/owner/all-creator');
export const getAllQuizzes = () => api.get('/owner/all-quizzes');
export const getQuizBytech = (tech) => api.get(`/owner?tech=${tech}`);

