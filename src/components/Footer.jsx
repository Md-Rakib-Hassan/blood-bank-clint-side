
import React from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../hooks/useAxiosPublic';

import Swal from 'sweetalert2';



const Footer = () => {
    const axios=useAxios();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
    
        const contactInfo={email};
     
        
    
       axios.post('/subscribers',contactInfo)
       .then(res=>{
        if(res.data.acknowledged){
        e.target.reset();
        return   Swal.fire('Subscribed.', 'From now you will get our newsletter', 'success')

            }
             return   Swal.fire('Try Again', 'Something gone wrong', 'error')
         

    })
    
            
    
    }

    return (
        <footer className="footer p-10 bg-gray-300  text-base-content overflow-hidden">
           
            <nav>
                <header className="footer-title">Company</header>
                <Link to={'/about-us'} className="link link-hover">About us</Link>
                <Link to={'/contact-us'} className="link link-hover">Contact Us</Link>
                <Link to={'/faqs'} className="link link-hover">FAQ</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link to={'/terms-and-conditions' } className="link link-hover">Terms And Conditions</Link>
            </nav>
            <form onSubmit={handleSubmit}>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div  className="relative">
                        <input type="text" name='email' placeholder="username@site.com" className="input input-bordered md:w-full w-56 pr-16" />
                        <input type='submit' value={'Subscribe'}  className="btn bg-blue-500 hover:bg-blue-600 text-white absolute top-0 md:right-0 right-14 rounded-l-none"/>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;