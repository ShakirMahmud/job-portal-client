import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use((request) => {
            return request;
        },
        error => {
            console.log('error caught in axios interceptor', error);
            if(error.status === 401 || error.status === 403){
                console.log('unauthorized, logging out ...');
                logout()
                .then(()=>[
                    navigate('/login')
                ])
                .catch(error => console.log(error));
            }
            return Promise.reject(error);
        }
    );
    }, []);

    return axiosInstance;
};

export default useAxiosSecure;