import axios from 'axios';

const API_URL = process.env.BASE_URL || 'http://localhost:4000/api';

const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosClient.interceptors.request.use(
    (config)=>{
        const token =localStorage.getItem('token');
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config;
    },(error)=>{
        return Promise.reject(error);
    }
)

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error", error);
        return Promise.reject(error);
    },
);

export default axiosClient;
