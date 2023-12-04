import React from 'react';
import Swal from 'sweetalert2';
import useUser from '../hooks/useUser';
import { Navigate, useNavigate } from 'react-router-dom';

const BlockedUser = ({children}) => {
    const navigate=useNavigate();

    const [DBuser]=useUser();

    if(DBuser?.status=='block'){
        
          Swal.fire({
            title: "Blocked user cant access",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          return navigate('/dashboard');
    }
    return children;
};

export default BlockedUser;