import React from "react";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10 mb-10">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/2 lg:text-left p-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Seize the opportunity to login now. Seek to find solutions to challenges that arise, as they provide opportunities for growth. We encounter challenges and obstacles on our journey, but they also present opportunities for learning and development.</p>
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <div className="card shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
