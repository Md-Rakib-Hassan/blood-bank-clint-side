// AddBlog.js

// import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { unstable_HistoryRouter } from 'react-router-dom';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {

    const { register, handleSubmit, reset,watch,resetField } = useForm();
    const axiosPublic=useAxiosPublic();
    const [content,setContent]=useState();

    const onSubmit = async (data) => {

        console.log(data);

        const imageFile = { image: data.thumbnail[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        console.log(res.data);

        if (res.data.success){
            const blogInfo= {
                title: data?.title,
                image: res?.data?.data?.display_url,
                content: content,
                status:'draft'
            }
            
            axiosPublic.post('/blogs',blogInfo)
            .then(()=>{
                
                return Swal.fire('Drafted', 'You successfully post the blog wait till publish it.', 'success')
            })
            .catch(()=>{
                return Swal.fire('Error', 'Something going wrong try again.', 'error')
            })

        }

    }

    return (
        <div className="container mx-auto my-8">
            <form onSubmit={handleSubmit(onSubmit)} className="px-10 mx-auto">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        {...register('title', { required: true })}
                        className="mt-1 p-2 border rounded-md w-full"
                        
                    />
                </div>
                <div className="mb-4">

                    <label className="label">
                        <span className="block text-sm font-medium text-gray-600">Thumbnail Image</span>
                    </label>
                    <input required type="file" accept="image/*" name="thumbnail"  {...register('thumbnail', { required: true })} className="input" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                        Content
                    </label>
                    <JoditEditor onBlur={newContent => setContent(newContent)} />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Create Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
