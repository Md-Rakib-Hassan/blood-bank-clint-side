import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5000/api/v1',
    baseURL: 'https://blood-bank-server-side-4nepatwp6-md-rakib-hassans-projects.vercel.app',


    withCredentials:true,
  });


const useAxios = () => {
    return instance;
};

export default useAxios;