import React from 'react'
import products from '../../asserts/3.png'

const Products = () => {
  return (
      <div className='px-4 py-6'>
          
          <img className='w-[80%] mx-auto' src={products} alt="" />
          <p className='text-center text-[14px] py-4 font-semibold'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <div className="bg-red-600 h-[2px] my-4 w-[100%]"></div>
          <p className='text-center text-[14px]  py-4 font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </p>

          <p className='text-center text-[14px] font-semibold'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>

    </div>
  )
}

export default Products