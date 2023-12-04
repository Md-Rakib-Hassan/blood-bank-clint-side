import React from 'react';
import Blog from '../pages/Blog';

const Featured = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4  mb-2'>Featured Blogs</h1>

            <p className='text-center lg:w-2/3 mx-auto mb-10'>Discover our carefully curated selection of featured blogs, each for a unique and exceptional experience. Explore these highlights and find the perfect blog for you.</p>
            <div className='mx-auto'>
            <Blog></Blog>
            </div>
           

        </div>
    );
};

export default Featured;