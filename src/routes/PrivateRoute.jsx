import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LoadingPage from '../pages/LoadingPage';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const context=useContext(AuthContext);
    const { user, isLoding } = context;
    if (isLoding) return <LoadingPage></LoadingPage>
    
    if (user) return children

    return <Navigate to={'/login'} replace></Navigate>

};

export default PrivateRoute;