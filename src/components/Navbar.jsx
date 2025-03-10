import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const links = <>
        <li><NavLink to="home">Home</NavLink></li>
        <li><NavLink to="all-reviews">All Reviews</NavLink></li>
        <li><NavLink to="add-reviews">Add Reviews</NavLink></li>
        <li><NavLink to="my-reviews">My Reviews</NavLink></li>
        <li><NavLink to="gameWatchList">Game WatchList</NavLink></li>
    </>

    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='w-11/12 mx-auto '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="font-bold text-xl">Chill Gamer</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-3">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <div className="flex items-center gap-2">
                                <div>
                                    {user?.displayName}
                                </div>
                                <div className="w-12 h-12">
                                    <img
                                        src={user?.photoURL}
                                        alt="User Avatar"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <Link to={'/home'} onClick={() => logOut()} className="btn">Logout</Link>
                            </div>
                        ) : (
                            <Link to="auth/sign-in" className="btn">Sign In</Link>
                        )
                    }


                </div>
            </div>
        </nav>
    );
};

export default Navbar;