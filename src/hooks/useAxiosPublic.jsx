import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000/api/v1',
    baseURL: 'https://blood-bank-server-side.vercel.app/api/v1',

    withCredentials:true,
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;