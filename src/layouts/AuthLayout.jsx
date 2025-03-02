import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <section className='w-11/12 mx-auto text-center'>
            <h1>This Is Auth  Layout</h1>
            <ul>
                <li className='btn'><Link to="signUp">Sign Up</Link></li>
            </ul>
            <Outlet></Outlet>
        </section>
    );
};

export default AuthLayout;