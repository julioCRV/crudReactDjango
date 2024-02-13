import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'https://backen-prueba.onrender.com/tareas/api/v1/'
});

export const getAllTasks = () => taskApi.get("/");

export const getTask = (id) => taskApi.get(`/${id}/`)

export const createTask = (task) => taskApi.post("/", task);

export const deleteTask = (id) => taskApi.delete(`/${id}/`);

export const updateTask = (id, task) => taskApi.put(`/${id}/`,task);