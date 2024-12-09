

import Image from 'next/image'
import React from 'react'

const Discount = () => {
  return (
    
    <div className="px-4 sm:px-8 lg:px-16 py-8">
    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]  text-center">
      Discount Item
    </h1>
  
    {/* Words below heading */}
    <div className="flex flex-wrap justify-center space-x-6 mt-8">
      <p className="text-sm font-medium text-[#FB2E86] underline mb-4 sm:mb-0">Wood Chair</p>
      <p className="text-sm font-medium text-[#151875] mb-4 sm:mb-0">Plastic Chair</p>
      <p className="text-sm font-medium text-[#151875] mb-4 sm:mb-0">Sofa Collection</p>
    </div>
  
    {/* Image */}
    <div className="flex justify-center mb-8">
      <Image src="/dis.png" width={1210} height={590} alt="sofa" className="w-full max-w-[1214px]" />
    </div>

   
  </div>
  
  )
}

export default Discount
