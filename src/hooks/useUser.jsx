import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import  { AuthContext } from "../provider/AuthProvider";

const useUser = () => {
    const {user}=useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {data: DBuser = [], isPending: loading, refetch} = useQuery({
        queryKey: ['user'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/user/${user?.email}`);
            return res.data[0];
        }
    })
   



    return [DBuser, loading, refetch]
};

export default useUser;