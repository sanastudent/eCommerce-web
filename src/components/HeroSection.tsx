
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (

    <div className='w-full h-[764px] bg-[#F2F0FF]'>
    <div className="flex justify-start items-start px-4 md:px-0"> {/* Container for images */}
      
      {/* Bell Image */}
      <div className="w-full md:w-auto mb-8 md:mb-0">
        <Image src="/bell.png" height={387} width={387} alt="bell" />
      </div>

      {/* Header Image and Button */}
      <div className="w-full md:w-auto mt-8 md:mt-52 md:ml-8 text-center md:text-left">
        <Image src="/header.png" width={375} height={325} alt="header" className="text-black" />
        <button className='w-[163px] h-[50px] bg-[#FB2E86] text-white text-sm mt-11 mx-auto md:mx-0'>Shop Now</button>
      </div>

      {/* Sofa Image */}
      <div className="w-full md:w-auto mt-8 md:mt-0">
        <Image src="/sofa.png" width={706} height={689} alt='sofa' />
      </div>
    </div>
  </div>
  

      );
      
    
      

}

export default HeroSection
