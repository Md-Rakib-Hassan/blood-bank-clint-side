import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    // baseURL: 'https://blood-bank-server-side-4nepatwp6-md-rakib-hassans-projects.vercel.app',

    withCredentials:true,
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;