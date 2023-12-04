import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import HTMLReactParser from 'html-react-parser';

const FullBlog = () => {
    const axiosPublic=useAxiosPublic();
    const {id}=useParams();
    const [blog,setblog]=useState({});
    useEffect(()=>{
        axiosPublic.get(`/blogs/${id}`)
        .then((res)=>setblog(res.data));

    },[axiosPublic,setblog,id]);

    console.log(blog);

    return (
        <div>
            <div className='flex justify-center'> 
            <img src={blog?.image} alt="" />

            </div>

            <div className='md:px-10'>
                <p className='text-center md:text-2xl lg:text-4xl font-bold my-10 text-red-500'>{blog?.title}</p>

                <p>
                {blog?.content && HTMLReactParser(blog?.content)}
                </p>
            </div>
            
        
            
        </div>
    );
};

export default FullBlog;