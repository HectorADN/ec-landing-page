import axios from 'axios';

const ecApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// SI se requiere de seguridad aqui van los interceptores

export { ecApi };