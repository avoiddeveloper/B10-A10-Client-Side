import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <Outlet></Outlet>
        </section>
    );
};

export default Auth;