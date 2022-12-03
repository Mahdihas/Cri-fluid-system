import React from 'react'
import { BsFillRecordFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import trophy from '../../asserts/1.png'
import people from '../../asserts/2.png'


const HeroSection = () => {
  return (
      <div className="">
            <div className='w-[100%] hero-content   flex-col lg:flex-row-reverse '>
          
          
          <div className="  lg:w-[70%] mx-2">
          <h3 className='pl-2 font-bold py-2'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
             
              <div className="">
              <p className='pl-4 flex text-[14px] font-semibold  items-center'> <FaCircle className='text-[10px]'></FaCircle> <p className='px-2'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for </p></p>
              <p className='pl-8 text-[14px] font-semibold '> various projects across the globe to save energy.</p>


              <p className='flex pl-4 text-[14px] font-semibold   items-center'> <FaCircle className='text-[10px]'></FaCircle> <p className='px-2'>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the  </p></p>
              <p className='pl-8 text-[14px] font-semibold  '> old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
           </div>
              <img className='h-[420px] w-full mt-4' src={people} alt="" />
              <p className='font-semibold text-[14px]'>Government of India has awarded the <span className='font-bold'> "National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director <br /> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br /> Minister of State.</p>
          </div>


          <div className=" lg:w-[30%] pt-6"><img className='h-[400px] lg:h-[650px]' src={trophy} alt="" /></div>

          </div>
          <p className='text-[14px] px-4 font-semibold'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>

    </div>

      


  )
}

export default HeroSection