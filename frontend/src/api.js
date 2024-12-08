import axios from 'axios';

// Update the base URL to match the new port
const API = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
});

export const addItem = (item) => API.post('items/', item);
export const getItems = () => API.get('items/');
