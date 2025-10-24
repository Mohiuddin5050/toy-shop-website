import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivetRoute = ({ children }) => {
    const {user, loading}=useContext(AuthContext)

        if(loading){
            return <Loading/>

        }

        if(user && user?.email){
            return children;
        }
    
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;