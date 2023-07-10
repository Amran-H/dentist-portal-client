import { min } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn } = useContext(AuthContext)

    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
    }

    return (
        <div className='h-[800px] flex flex-col justify-center items-center '>
            <div className='w-96 p-7 shadow-xl rounded-xl'>
                <h2 className='text-xl text-center font-bold mb-10'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full"{...register("email", { required: "Email is required" })} />
                        {errors.email && <p className='text-red-600'> {errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full"{...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            },
                        )} />
                        {errors.password && <p className='text-red-600'> {errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget-Password</span>
                        </label>
                    </div>
                    {/* <p>{data}</p> */}
                    <input className='btn btn-accent w-full  my-4' type="submit" value="Login" />
                </form>
                <p>New to Dentist-Portal? <Link className='text-primary' to='/signup'>Create a new account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>

    );
};

export default Login;