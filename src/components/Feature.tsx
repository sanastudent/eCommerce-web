

import { Ambulance } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Footer from './ui/Footer';

const Feature = () => {
  return (
    <>
  
  <div className="flex justify-center mt-36 space-x-0">
  <div className="flex flex-col items-center">
    <Image src="/van.png" width={65} height={65} alt="v" className="m-0 p-0" />
    <div className='w-[217px] h-[127px]'>
   <h6 className='text -[#151875] text-sm text-center mt-8' >Free Delivery</h6>
   <p className='text-sm text-[#8A8FB9]  mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
   </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/cash.png" width={65} height={65} alt="cash" className="m-0 p-0" />
    <div className='w-[217px] h-[127px] ml-14'>
    <h6 className='text -[#151875] text-sm text-center mt-8'>100% Cashback</h6>
   <p className='text-sm text-[#8A8FB9]  mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
  </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/medl.png" width={65} height={65} alt="medl" className="m-0 p-0" />
    <div className='w-[217px] h-[127px]'>
      <h6 className='text -[#151875] text-sm text-center mt-8'>Quallity Product</h6>
   <p className='text-sm text-[#8A8FB9] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
  </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/hour.png" width={65} height={65} alt="hour" className="m-0 p-0" />
    <div className='w-[217px] h-[127px]'>
    <h6 className='text -[#151875] tex-sm text-center mt-8'>24/7 Support</h6>
    <p className='text-sm text-[#8A8FB9]  mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
  </div>
  </div>
</div>



{/* client area */}

<div className="flex justify-center items-center flex-col mt-28">
  <div className="">
    <h1 className="font-josefin font-bold text-2xl">Our Client Say</h1>
  </div>
  <div className="mt-4">
    <Image src="/comment.png" width={689} height={265} alt="comment section" />
  </div>
</div>


<Footer/>

    </>
  )
}

export default Feature
