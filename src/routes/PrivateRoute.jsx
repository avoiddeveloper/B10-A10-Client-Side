import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props = {}) => {
    const { children } = props || {};
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.email) {
        return children
    }
    // return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;