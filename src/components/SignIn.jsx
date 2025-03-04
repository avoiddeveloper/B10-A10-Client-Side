import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    return (
        <section className=" w-11/12 min-h-screen flex flex-col justify-center">
            <div className="w-[50%] mx-auto bg-purple-200 rounded-xl space-y-5 p-5">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold ">Welcome</h1>
                    <p className="font-light">Access Your Account & Dive Into the Game Reviews!</p>
                </div>

                <div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <div className="card-body text-center">
                            <form className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <input type="submit" value="Sign In" className="btn bg-purple-300 mt-4" />
                            </form>
                            <Link className="btn bg-purple-300 mt-4"> <FaGoogle></FaGoogle> Google </Link>
                            <Link to="/auth/sign-up" className="link">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;