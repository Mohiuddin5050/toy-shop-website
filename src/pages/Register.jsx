import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log({ name, email, password, photo });
        if (!/(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(password)) {
            toast.error("Password must have uppercase, lowercase and min 6 chars");
            return;
        }
        createUser(email, password)
            .then(() => {
                // const user=result.user;
                updateUser(name, photo);
                toast.success("Registration successful!");
                navigate("/");
                // console.log(user);
            })
            .catch((err) => toast.error(err.message));
    };
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                toast.success(`Welcome, ${user.displayName}!`);
                navigate("/");
            })
            .catch((err) => toast.error(err.message));
    }

    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-center font-semibold text-2xl'>Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Your Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter your name" required />

                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Enter your email address" required />

                            <label className="label">Password</label>
                            <div className="relative">
                                <input
                                    name='password'
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <button type="button"
                                onClick={handleGoogle}
                                className="btn btn-outline mt-3 w-full">
                                Login with Google
                            </button>
                            <p className='text-center text-accent py-5'>Already Have An Account ? {" "} <Link className='text-secondary' to='/login'>Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;