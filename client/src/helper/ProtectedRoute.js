import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const userDetails = useSelector((state) => state.user);
    const user = userDetails.user;
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' />;

    }

}
export default ProtectedRoute