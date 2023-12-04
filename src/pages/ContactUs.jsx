import  { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxios from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const ContactUs = () => {

    const {user}=useContext(AuthContext);
    const axios=useAxios();


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const subject = e.target.subject.value
        const message = e.target.message.value

        const contactInfo={name,email,subject,message};
        console.log(contactInfo);
        

        axios.post('/contacts-info',contactInfo)
        .then(res=>{
            if(res.data.acknowledged){
            e.target.reset();
             return   Swal.fire('Thank You.', 'We will contact you soon', 'success')

            }
             return   Swal.fire('Try Again', 'Something gone wrong', 'error')
             

        })

        




    }


    
    return (
        <div className='w-3/4 mx-auto space-y-3 mt-16 py-8'>
            <div className='mt-10'>

            <div className='mb-10'>
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <p className='text-gray-500'>Let us know what you think! In order to provide beter service, please do not hesitate to give us your feedback. Thank You.</p>

            </div>

            

            <form onSubmit={handleSubmit} className='space-y-10'>
               <div className='flex flex-col md:flex-row w-full gap-8'>
  
                <input name='name' disabled value={user?.displayName} required placeholder='Name' className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />
                <input name='email' disabled value={user?.email} required placeholder='Email' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="email"  />
     
               </div>
               <input name='subject' required placeholder='Subject' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />

               <textarea name='message' required placeholder='Message' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />
               <div className='flex justify-center'>
               <input className='btn bg-blue-500 hover:bg-blue-600 text-white' type="submit" value={'SUBMIT'} />

               </div>
               

            </form>

            </div>
            
           

           

           
            
        </div>
    );
};

export default ContactUs;