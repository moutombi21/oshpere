"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { PopupButton } from 'react-calendly'

const Navbar = ({event}) => {
  return (
    <header className="text-gray-600 body-font md:block hidden">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image 
      src="/agency.png" 
      width="0"
      height="0"
      sizes="100vw"
      className="w-36 h-auto"
      alt='logo'
       />
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">A propos</Link>
      <Link href="/#service" className="mr-5 hover:text-gray-900">Services</Link>
      <Link href="/#contact" className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
  {/* <PopupButton text="Click here to schedule!" rootElement={document.getElementById("room")} url="https://calendly.com/osphere" /> */}
    
    <button onClick={()=>event(true)} className="inline-flex items-center bg-white border border-black py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0">Réserver un appel
    </button>
   
  </div>
</header>

  )
}

export default Navbar