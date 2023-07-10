import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='h-[800px] flex flex-col justify-center items-center '>
            <div className='w-96 p-7 shadow-xl rounded-xl'>
                <h2 className='text-xl text-center font-bold mb-10'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full"
                            {...register("name", {
                                required: "Name is required"
                            })}
                        />
                        {errors.name && <p className='text-red-600'> {errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full"
                            {...register("email", {
                                required: "Email is required"
                            })}
                        />
                        {errors.email && <p className='text-red-600'> {errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be have one uppercase one number and one special character "
                                }
                            })}
                        />
                        {errors.password && <p className='text-red-600'> {errors.password?.message}</p>}

                    </div>
                    <input className='btn btn-accent w-full  my-4' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;