'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTruckFast, faUserPlus, faUserShield } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import auther from '../../../assets/images/review-author.png';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { SubmitHandler, useForm } from "react-hook-form";
import { signupFormValues, signupSchema } from '../schema/signup.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import signupAction from '../server/sign.actions';
import { toast } from 'react-toastify';
// import { object } from 'zod';
import { useRouter } from 'next/navigation';

export default function SignupForm() { 

    const router = useRouter();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<signupFormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            resetPassword: "",
            phone: "",
            terms: false,
        },

        resolver: zodResolver(signupSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });



const onSubmit: SubmitHandler<signupFormValues> = async (values) => {
    try {
        const response = await signupAction(values);
        console.log({response});

        if (response.success) {
            toast.success(response.message);
            // ⚡ تأكدي من استخدام setTimeout للانتقال بعد ثانيتين
            setTimeout(() => router.push("/login"), 2000);
        } else {
            toast.error(response.message || "Signup failed");

            // لو فيه validation errors
            if (response.errors) {
                Object.keys(response.errors).forEach((key) => {
                    setError(key as keyof signupFormValues, { message: response.errors[key] });
                });
            }
        }

    } catch (error) {
        console.log("FORM ERROR 👉", error);
    }
};



    return <>
        <main className="py-12">
            <div className="container grid lg:grid-cols-2 lg:gap-12">
                <div className="space-y-8 py-10">
                    <div>
                        <h2 className="text-4xl font-bold">Welcom To <span className='text-green-600'>FreshCart</span></h2>
                        <p className="text-lg mt-2">join thousands of happy customers who enjiy fresh groceries
                            delivered right to thair doorstep.
                        </p>
                    </div>
                    <ul className='*:flex *:items-center space-y-5'>
                        <li>
                            <div className="icon size-12 rounded-full text-xl flex justify-center items-center text-green-600 bg-green-200">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="contant ms-3">
                                <h3 className="font-semibold">Premium Quality</h3>
                                <p className="text-gray-500">Premium quality products sourced from trusted suppliers.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon size-12 rounded-full text-xl flex justify-center items-center text-green-600 bg-green-200">
                                <FontAwesomeIcon icon={faTruckFast} />
                            </div>
                            <div className="contant ms-3">
                                <h3 className="font-semibold">Fast Deliver</h3>
                                <p className="text-gray-500">Same-day delivery available in most areas.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon size-12 rounded-full text-xl flex justify-center items-center text-green-600 bg-green-200">
                                <FontAwesomeIcon icon={faUserShield} />
                            </div>
                            <div className="contant ms-3">
                                <h3 className="font-semibold">Secure Shopping</h3>
                                <p className="text-gray-500">Secure payment processing and data protection.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="review py-5 ps-5 rounded-xl bg-white shadow-md">
                        <div className='flex items-center gap-x-4'>
                            <Image src={auther} width={50} alt='auther' />
                            <div>
                                <h3>Sarah Johnson</h3>
                                <div className="rating flex items-center text-yellow-300">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <blockquote>
                            <p className="text-gray-700 italic mt-1">FreshCart has tranformed my shopping experience. The quality
                                of the products is outstanding, and the delivary is always on
                                time. Highly recommend!
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className='p-10 space-y-8 bg-white rounded-xl shadow-md'>
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Create Your Account</h2>
                        <p className="mt-1">Start your fresh journey with us today</p>
                    </div>
                    <div className="flex gap-2 *:flex *:items-center *:justify-center *:w-full *:gap-2 *:hover:bg-gray-100">
                        <button className="btn bg-transparent border border-gray-400/40">
                            <FontAwesomeIcon icon={faGoogle} className='text-red-600' />
                            <span>Google</span>
                        </button>
                        <button className="btn bg-transparent border border-gray-400/50">
                            <FontAwesomeIcon icon={faFacebook} className='text-blue-700' />
                            <span>Facebook</span>
                        </button>
                    </div>
                    <div className='relative w-full h-0.5 bg-gray-400/50'>
                        <span className='absolute px-4 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>or</span>

                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="name flex flex-col gap-1">
                            <label htmlFor="name">Name*</label>
                            <input type="text" id="name" placeholder="Ali" className="form-control"
                                {...register("name")} />
                            {errors.name && <p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>}
                        </div>
                        <div className="email flex flex-col gap-1">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" placeholder="ali2026.gmail.com" className="form-control"
                                {...register("email")} />
                            {errors.email && <p className='text-red-600 text-sm mt-1'>{errors.email.message}</p>}
                        </div>
                        <div className="phone flex flex-col gap-1">
                            <label htmlFor="phone">Phone*</label>
                            <input type="tel" id="phone" placeholder="+20 101 233 6289" className="form-control"
                                {...register("phone")} />
                            {errors.phone && <p className='text-red-600 text-sm mt-1'>{errors.phone.message}</p>}
                        </div>
                        <div className="password flex flex-col gap-1">
                            <label htmlFor="password">Password*</label>
                            <input type="password" id="password" placeholder="Strong password" className="form-control"
                                {...register("password")} />
                            {errors.password ? (<p className='text-red-600 text-sm mt-1'>{errors.password.message}</p>) : (<p className='text-gray-600 text-sm mt-1'>Must be at least 8 characters long</p>)}
                        </div>

                        <div className="repassword flex flex-col gap-1">
                            <label htmlFor="password">Confirm Password*</label>
                            <input type="password" id="repassword" placeholder="Confirm Your Password" className="form-control"
                                {...register("resetPassword")} />
                            {errors.resetPassword && <p className='text-red-600 text-sm mt-1'>{errors.resetPassword.message}</p>}
                        </div>
                        <div className="terms flex items-center gap-2">
                            <input type="checkbox" id="terms" className='accent-green-600'
                                {...register("terms")} />
                            <label htmlFor="terms">
                                <span>I agree to the </span>
                                <Link href={'/terms'} className='text-green-600 underline'>Terms</Link>
                                <span> and</span>
                                <Link href={'/privacy-policy'} className='text-green-600 underline'> Privacy Policy</Link>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className='btn bg-green-600 text-white flex gap-2 items-center hover:bg-green-700 transition-colors duration-100 w-full justify-center'>
                                <FontAwesomeIcon icon={faUserPlus} />
                                <span>Create Account</span>
                            </button>
                            <p className='text-center mt-3 pt-9 border-t border-gray-300/50'>Already have an account? <Link href={'/login'} className='text-green-600 transition-colors duration-100 underline'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>
}
