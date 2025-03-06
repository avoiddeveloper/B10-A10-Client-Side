import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
const SignUp = () => {

    const { createUser, setUser } = useContext(AuthContext)

    const handleForm = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get("email");
        const photo = form.get("photo");
        const name = form.get("name");
        const pass = form.get("pass");


        if (!/[A-Z]/.test(pass)) {
            return alert("Must have an Uppercase letter in the password")
        }

        if (!/[a-z]/.test(pass)) {
            return alert("Must have a Lowercase letter in the password")
        }

        if (pass.length < 6) {
            return alert("Length must be at least 6 character")
        }

        createUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                const userName = user.displayName;
                const userEmail = user.email;
                const userDB = { userName, userEmail }

                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                }).then(() => {
                    setUser(user);
                    fetch('http://localhost:5000/user', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDB)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    title: "Sign Up Successful!",
                                    icon: "success"
                                });
                            }
                        })

                }).catch((error) => {
                    alert("Error updating user profile:", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorCode}`,
                });
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
                                <input type="text" name='name' className="input w-full" placeholder="Enter Your Name" required />

                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Enter Your Email" required />

                                <label className="fieldset-label">Photo URL</label>
                                <input type="text" name='photo' className="input w-full" placeholder="Enter Your Photo URL" required />

                                <label className="fieldset-label">Password</label>
                                <input type="password" name='pass' className="input w-full" placeholder="Password" required />

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