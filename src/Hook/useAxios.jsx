import { useState, useEffect } from 'react';
import axios from 'axios';
// import { set } from 'react-hook-form';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = ({ url, method, headers = null }) => {
    const [responseAxios, setResponseAxios] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);



    

    const  fetchData = async (body = null) => {
        setLoading(true);
        axios({
            method: method,
            url: url,
            data: body,
            headers: headers
        })
            .then((res) => {
                setResponseAxios(res.data);
            })
            .catch((err) => {
                setError(err.message || 'An error occurred');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        // fetchData();
    }, [method, url, headers]);

    return { responseAxios, error, loading, fetchData };
};

export default useAxios;
