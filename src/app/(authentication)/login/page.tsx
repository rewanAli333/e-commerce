'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faClock, faTruckFast,  faUserShield } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import img from "../../../assets/images/home-slider-1.png"
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from '../schema/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import loginAction from '../server/login.actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setToken } from '../server/server.actions';
import { setAuthInfo } from '../store/auth.slice';
import { useDispatch } from 'react-redux';
// import { userInfo } from 'node:os';


export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    

    const { register, handleSubmit, setError, formState:{errors} } = useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },

        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        reValidateMode:"onChange"
    });

    const onSubmit: SubmitHandler<LoginFormValues> = async (values)=>{
        console.log(values);
        try {
            const response = await loginAction(values);
            console.log("LOGIN RESPONSE 👉", response);
            if (response?.success) {

                // set token

                await setToken(response.data.token, values.rememberMe);

                // is Authenticated = true
                dispatch(setAuthInfo({ isAuthenticated: true, userInfo: response.data.user }));  
                
                toast.success(response?.message);
                setTimeout(() => {
                    router.push('/')
                }, 2000);


            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof LoginFormValues, {message: response.errors[key]})
                    })
                }
            }
            
        } catch (error) {}
    }
    
    return <>
        <main className='py-12 '>
            <div className="container grid lg:grid-cols-2 lg:gap-12">
                <div className='py-10 flex-col justify-center items-center text-center'>
                        <Image src={img} width={500} alt='login img' />
                    <h2 className='mt-2 font-bold text-2xl'>Fresh Groceries Delivered</h2>
                    <p className='text-gray-500'>
                        Join thousands of happy customers who trust FreshCart for their daily grocery needs
                    </p>
                    <div>
                        <ul className='flex justify-center items-center *:me-7 *:text-green-600'>
                            <li>
                                <FontAwesomeIcon icon={faTruckFast} />
                                <span className='ms-2 text-gray-500'>Free Delivery</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUserShield} />
                                <span className='ms-2 text-gray-500'>Secure Payment</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faClock} />
                                <span className='ms-2 text-gray-500'>24/7</span>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className='space-y-8 py-10 bg-white rounded-xl shadow-md flex flex-col justify-center items-center'>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold "><span className='text-green-600'>Fresh</span>Cart</h2>
                        <h2 className='font-bold text-2xl mt-1'>Welcom Back!</h2>
                        <p className="mt-1">sign in to contain yuor fresh shopping experience</p>
                    </div>
                    <div className='space-y-4 *:flex *:justify-center *:items-center'>
                        <div>
                        <button className="btn bg-transparent border border-gray-400/40 w-130">
                            <FontAwesomeIcon icon={faGoogle} className='text-red-600' />
                            <span>Google</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn bg-transparent border border-gray-400/50 w-130">
                            <FontAwesomeIcon icon={faFacebook} className='text-blue-700' />
                            <span>Facebook</span>
                        </button>
                        </div>
                    </div>
            <div className='relative w-130 h-0.5 bg-gray-400/50'>
                        <span className='absolute px-4 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px]'>OR CONTINUE WITH EMAIL</span>
            </div>
            <form className="space-y-4 *:w-130" onSubmit={handleSubmit(onSubmit)}>
                    <div className="email flex flex-col gap-1">
                        <label htmlFor="email">Email*</label>
                            <input type="email" id="email" placeholder="Enter your email" className="form-control"
                                {...register('email')} />
                                {errors.email && <p className='text-red-500 mt-1'>*{errors.email.message}</p>}
                        </div>
                    <div className="password flex flex-col gap-1">
                        <label htmlFor="password">Password*</label>
                            <input type="password" id="password" placeholder="Enter your Password" className="form-control"
                                {...register('password')} />
                            {errors.password && <p className='text-red-500 mt-1'>*{errors.password.message}</p>}
                        </div>
                            <div className='flex justify-end -mt-3'><Link href={'/forget-password'} className='text-green-600 hover:text-green-700 font-bold'>Forget Password?</Link></div>
                        <div className="terms flex items-center gap-2">
                            <input type="checkbox" id="terms" className='accent-green-600'
                            {...register('rememberMe')}/>
                            <label htmlFor="terms">Keep me signed in</label>
                        </div>
                        <div>
                            <button type="submit" className='btn bg-green-600 text-white flex gap-2 items-center hover:bg-green-700 transition-colors duration-100 w-full justify-center'>Sign In</button>
                            <p className='text-center mt-3 pt-9 border-t border-gray-300/50'>New to FreshCart? <Link href={'/signup'} className='text-green-600 transition-colors duration-100 underline'>Sign Up</Link></p>
                        </div>
                    </form>
            </div>
            </div>
            </main>
  </>

  
}