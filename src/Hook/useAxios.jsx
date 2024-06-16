import { useState, useEffect } from 'react';
import axios from 'axios';
import StorageService from '../services/StorageService';

// import { set } from 'react-hook-form';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// const apiUrl = import.meta.env.VITE_API_URL;



const useAxios = ({ url, method, headers = null }) => {
    const [responseAxios, setResponseAxios] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                const token = StorageService.getToken();
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Eject the interceptor when the component unmounts
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, []);
    

    const fetchData = async (body = null) => {
        setLoading(true);
        axios({
            method: method,
            url: url,
            data: body,
            headers:headers
        

        })
            .then((res) => {
                setResponseAxios(res.data);
            })
            .catch((err) => {
                console.log(err)
                if(err.response)
                    setError(err.response.data || 'An error occurred');
                else
                    setError(err.message || 'An error occurred');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        if(method && url){
            // fetchData();
        }
    }, [method, url, headers]);

    return { responseAxios, error, loading, fetchData };
};

export default useAxios;
