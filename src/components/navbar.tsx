'use client'
import { useState } from "react";
import Link from "next/link";
import imglogo from '../assets/images/freshcart-logo.svg';
import Image from "next/image";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "@/store/store";
import useLogout from "@/app/(authentication)/logout/logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const { logout } = useLogout();
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
    setIsOpen(!isOpen);
    }
    
    const { isAuthenticated } = useSelector((appState: AppState) => appState.auth);
    return (
      <>
            <header>
          <div className="hidden lg:flex container py-2  justify-between items-center border-b border-gray-400 text-sm">
              
        <ul className="flex gap-5 items-center">
                  <li className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 me-1.5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
                  <li className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>
                <a href="mailto:contact@example.com">contact@example.com</a>
                  </li>
                  </ul>
                  <ul className="flex gap-5 items-center">
                        <li>
                      <Link href={'/contact'}>Contact</Link>
            </li>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                      <Link href={'/help'}>Help & Support</Link>
            </li>
            <li>
                <select name="" id="">
                    <option>EGP</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </li>
            <li>
                <select name="" id="">
                    <option value="er">العربية</option>
                    <option value="en">English</option>
                </select>
            </li>
                  </ul>
          
              
              </div>
          <nav className="container flex justify-between items-center py-4 text-sm"> 
              <div className="">
                  <h1>
                      <Link href={'/'}>
                          <Image width={240}  src={imglogo} alt="fresh cart"/>
                      </Link>
                  </h1>
                  
              </div>
                    <ul className="gap-5 items-center hidden lg:flex">
                        <li >
                          <Link href={'/'} className="flex flex-col items-center justify-center hover:text-green-600 transition-colors duration-200">
                              <FontAwesomeIcon icon={faHouse} />
                                <span>Home</span>
                          </Link>
                      </li>
                      
                      <li >
                          <Link href={'/cart'} className="flex flex-col items-center justify-center hover:text-green-600 transition-colors duration-200">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span>Cart</span>
                          </Link>
                        </li>
                        
                        <li >
                          <Link href={'/terms'} className="flex flex-col items-center justify-center hover:text-green-600 transition-colors duration-200">
                              <FontAwesomeIcon icon={faBookOpenReader} />
                                <span>Terms</span>
                          </Link>
                      </li>
                        
                        { isAuthenticated ? <li onClick={logout}>
                      <Link href={'/logout'} className="flex flex-col items-center justify-center hover:text-green-600 transition-colors duration-200">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                                <span>Logout</span>
                          </Link>
                        </li> : (
                        <>
                             <li>
                            <Link href={'/signup'} className="flex flex-col items-center justify-center hover:text-green-600 transition-colors duration-200">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                                <span>Sign Up</span>
                  </Link>
                        </li> <li>
                      <Link href={'/login'} className="flex flex-col items-center justify-center hover:text-green-600 transition-colors duration-200">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                                </svg>
                                <span>Login</span>
                      </Link>
                  </li>       
                        </>
        )}
                        
              </ul>
              <button className="btn bg-green-600 text-white rounded-md lg:hidden" onClick={toggleMenu}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

                  </button>
              </nav>
          {isOpen && <>
              <div className="bg-black/50 z-30 fixed inset-0"></div>
              <div className="off-canvas fixed z-30 bg-white top-0 bottom-0 p-5 space-y-3 animate-slide-in">
                  <div className="flex justify-between mb-6 mt-3 border-b border-gray-200 pb-3">
                      <Image width={100} height={150} src={imglogo} alt="fresh cart"/>
                      <button className="btn rounded-full bg-gray-200" onClick={toggleMenu}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                      </button>
                  </div>
                  <search className="flex justify-center items-center relative">
                      <input type="text" className="form-control min-w-60" placeholder="Search for proudects" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 absolute right-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                  </search>
                  <div className="border-b border-gray-200">
                      <h2 className="text-1xl font-bold">Main Menu</h2>
                      <ul className="*:py-2 *:px-2 space-y-2 *:hover:bg-gray-100 transition-colors duration-200">
                          <li>
                              <Link href={'/wishlist'} className="flex items-center hover:text-green-600 transition-colors duration-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                  </svg>
                                  <span>Wish List</span>
                              </Link>
                          </li>
                          <li >
                              <Link href={'/cart'} className="flex items-center hover:text-green-600 transition-colors duration-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>
                                  <span>Cart</span>
                              </Link>
                          </li>
                          <li className="mb-3">
                              <Link href={'/profile'} className="flex items-center hover:text-green-600 transition-colors duration-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  </svg>
                                  <span>Profile</span>
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div className="border-b border-gray-200">
                      <h2 className="text-1xl font-bold">Account</h2>
                            <ul className="*:py-2 *:px-2 space-y-2 *:hover:bg-gray-100 transition-colors duration-200">
                                
                                {isAuthenticated ? <li onClick={logout}>
                              <Link href={'/logout'} className="flex items-center hover:text-green-600 transition-colors duration-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 me-3">
                                      <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                                  </svg>
                                  <span>Logout</span>
                              </Link>
                                </li> : (<>
                                        <li className="mb-3">
                              <Link href={'/signup'} className="flex items-center hover:text-green-600 transition-colors duration-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                  </svg>
                                  <span>Sign Up</span>
                              </Link>
                                        </li> 
                                        <li className="mb-3">
                              <Link href={'/login'} className="flex items-center hover:text-green-600 transition-colors duration-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                  </svg>
                                  <span>login</span>
                              </Link>
                          </li>
                                </>)}
                          
                          
                      </ul>
                  </div>
              </div>
          </>}
          
    </header>
      </>
  );
}



