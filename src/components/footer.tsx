'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import imglogo from '../assets/images/freshcart-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
    return <>
        
        <footer className=" bg-gray-50 rounded-xl shadow-2xl mt-10 py-5">
            <div className="container">
                        <div className='grid md:grid-cols-2 xl:grid-cols-5 mb-5 gap-8'>
                <div className='xl:col-span-2 me-3 space-y-3'>
                    <Image width={240} src={imglogo} alt="fresh cart"/>
                    <p>
                        fresh cart is a leading online grocery store that offers a wide range of
                        fresh and high-quality products to customers across the country. With a 
                        commitment to providing exceptional service and a seamless shopping experience,
                        fresh cart has become a trusted name in the online grocery industry. 
                    </p>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-3'>Categories</h2>
                    <ul className='space-y-3 *:hover:text-green-700 *:transition-colors *:duration-200'>
                        <li>
                            <Link href={'/menfashion'}>Men Fashion</Link>
                        </li>
                        <li>
                            <Link href={'/womenfashion'}>Woman Fashion</Link>
                        </li>
                        <li>
                            <Link href={'/babyfashion'}>Baby Fashion</Link>
                        </li>
                        <li>
                            <Link href={'/beauty-health'}>Beauty & Health</Link>
                        </li>
                        <li>
                            <Link href={'/electronics'}>Electronics</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-3'>Quick Links</h2>
                    <ul className='space-y-3 *:hover:text-green-700 *:transition-colors *:duration-200'>
                        <li>
                            <Link href={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact Us</Link>
                        </li>
                        <li>
                            <Link href={'/privacy-policy'}>Privacy & Policy</Link>
                        </li>
                        <li>
                            <Link href={'/terms'}>Terms</Link>
                        </li>
                        <li>
                            <Link href={'/shoppingPolicy'}>Shopping Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-3'>Custemor Service</h2>
                    <ul className='space-y-3 *:hover:text-green-700 *:transition-colors *:duration-200'>
                        <li>
                            <Link href={'/Profile'}>My Profile</Link>
                        </li>
                        <li>
                            <Link href={'/cart'}>My Orders</Link>
                        </li>
                        <li>
                            <Link href={'/wishlist'}>Wish List</Link>
                        </li>
                        <li>
                            <Link href={'/help'}>Help & Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='py-3 border-t border-gray-400 mt-1'>
                <p>© {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
            </div>
            </div>

        </footer>
        
  </>
  
}
