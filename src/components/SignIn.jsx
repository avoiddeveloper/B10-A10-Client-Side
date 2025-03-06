import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const { loginUSer } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const email = form.get('email')
        const pass = form.get('pass')
        loginUSer(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Login Successful",
                    text: `Welcome Back King ${user.displayName}`,
                    icon: "success"
                });
                event.target.reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                Swal.fire({
                    icon: "error",
                    text: `${errorCode}`,
                    title: "Try Again",
                });
            });
    }
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
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="pass" className="input w-full" placeholder="Password" />
                                <input type="submit" value="Sign In" className="btn bg-purple-300 mt-4" />
                            </form>
                            <Link to="/auth/sign-up" className="link">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;