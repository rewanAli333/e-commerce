import Image from 'next/image';
import NotFound from "../assets/images/404.svg"
import React from 'react'

export default function notFound() {
  return <>
    <Image src={NotFound} alt="not found" className='w-full h-screen object-contain' />
    <h2 className="text-center text-4xl font-bold text-green-700 mt-4">Page Not Found 404</h2>
  </>
}
