import React from 'react'
import { BsGlobe2,BsWhatsapp,BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
      <div className='px-1 lg:px-3'>
          <div className="py-8 grid grid-cols-1  md:grid-cols-3  bg-[#EC3237]">
              <div className="text-white flex justify-center py-2"> <p className='text-[20px]'> <BsWhatsapp></BsWhatsapp> </p> <p className='px-2'>Toll free 1800 2100 380</p></div>
              <div className="text-white flex justify-center py-2"> <p className='text-[20px]'> <BsFacebook></BsFacebook></p> <p className='px-2'>www.facebook.com crpcump</p></div>
              <div className="text-white flex justify-center py-2"> <p className='text-[20px]'> <BsGlobe2></BsGlobe2></p> <p className='px-2'>WWW.crigroup.com</p></div>
              
              

              
          </div>
          
    </div>
  )
}

export default Footer