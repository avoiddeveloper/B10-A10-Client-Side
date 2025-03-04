import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <section className=" w-11/12 min-h-screen flex flex-col justify-center">
            <div className="w-[50%] mx-auto bg-purple-200 rounded-xl space-y-5 p-5">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold ">Join Chill Gamer</h1>
                    <p className="font-light">Sign up now and start exploring the best game reviews!</p>
                </div>

                <div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <div className="card-body text-center">
                            <form className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input w-full" placeholder="Enter Your Name" />

                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full" placeholder="Enter Your Email" />

                                <label className="fieldset-label">Photo URL</label>
                                <input type="text" className="input w-full" placeholder="Enter Your Photo URL" />

                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />

                                <input type="submit" value="Sign Up" className="btn bg-purple-300 mt-4" />
                            </form>
                            <Link to='/auth/sign-in' className="link"> Sign In </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;