import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
});

export const getAllTasks = () => taskApi.get("/");

export const getTask = (id) => taskApi.get(`/${id}/`)

export const createTask = (task) => taskApi.post("/", task);

export const deleteTask = (id) => taskApi.delete(`/${id}/`);

export const updateTask = (id, task) => taskApi.put(`/${id}/`,task);