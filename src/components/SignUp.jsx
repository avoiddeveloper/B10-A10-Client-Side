import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const SignUp = () => {

    const { createUser, setUser, user } = useContext(AuthContext)

    console.log(user)
    const handleForm = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get("email");
        const photo = form.get("photo");
        const name = form.get("name");
        const pass = form.get("pass");
        console.log({ name, photo, email, pass })
        createUser(email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            }).then(() => {
                setUser(user);
                // navigate(location?.state ? location.state : "/");
            }).catch((error) => {
                alert("Error updating user profile:", error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
        });
    };

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
                            <form onSubmit={handleForm} className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Enter Your Name" />

                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Enter Your Email" />

                                <label className="fieldset-label">Photo URL</label>
                                <input type="text" name='photo' className="input w-full" placeholder="Enter Your Photo URL" />

                                <label className="fieldset-label">Password</label>
                                <input type="password" name='pass' className="input w-full" placeholder="Password" />

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