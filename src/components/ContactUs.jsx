const ContactUs = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: 'url(https://i.ibb.co.com/jvxfqVnh/asphat-8.jpg)',
            }}>
            <div className="hero-overlay overlay-3"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md ">
                    <div className="card w-full shrink-0 shadow-2xl">
                        <h1 className="text-3xl font-semibold">Get Chill Gamer's Update</h1>
                        <div className="card-body">
                            <fieldset className="fieldset *:bg-transparent *:text-white">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input" placeholder="enter Your Name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;