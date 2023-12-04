import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
            <img src="https://i.ibb.co/YXTpMMP/ravi24-may-8.jpg" alt="" />

            <div className='absolute lg:bottom-32 lg:left-36 md:bottom-8 left-4 bottom-2'>
            <Link to={'/registeration'}><button className='btn'> Join as a donars</button></Link>
            <Link to={'/search-doner'}><button className='btn ml-10'> Search Donors</button></Link>

                
                

            </div>

            </div>
            
        </div>
    );
};

export default Banner;