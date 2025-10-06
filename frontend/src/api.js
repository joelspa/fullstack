// 1 - configuración de Axios para consumir la API del backend
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 8000
});

export async function getCourses() {
    const { data } = await api.get('/courses');
    return data;
}

export async function createCourse(curso) {
    const { data } = await api.post('/courses', curso);
    return data;
}