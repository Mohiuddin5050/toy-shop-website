import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {
    const {user}=useContext(AuthContext)

        if(user && user?.email){
            return children;
        }
    
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;