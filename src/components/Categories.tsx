

import React from 'react';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center  px-4 mt-2">
    {/* Heading */}
    <h1 className="font-josefin text-4xl font-bold mb-8">Top Categories</h1>

    {/* Images */}
    <div className="flex flex-wrap justify-center gap-6">
      <div className="w-32 sm:w-32 md:w-34 lg:w-40 xl:w-56">
        <Image src="/d1.png" alt="Image 1" width={200} height={250} layout="responsive" />
      </div>
      <div className="w-32 sm:w-32 md:w-34 lg:w-40 xl:w-56">
        <Image src="/d2.png" alt="Image 2" width={20} height={250} layout="responsive" />
      </div>
      <div className="w-32 sm:w-32 md:w-34 lg:w-40 xl:w-56">
        <Image src="/d3.png" alt="Image 3" width={200} height={250} layout="responsive" />
      </div>
      <div className="w-32 sm:w-32 md:w-34 lg:w-40 xl:w-56">
        <Image src="/d4.png" alt="Image 4" width={150} height={250} layout="responsive" />
      </div>
    </div>

    <div className="mt-12 flex justify-center">
  <Image src="/dot.png" width={66} height={15} alt="dot" className="w-full max-w-[66px]" />
</div>

<div className="mt-8 relative w-full h-[450px]">
  <Image 
    src="/pic.png" 
    alt="pic" 
    layout="fill" 
    objectFit="cover" 
    className="absolute top-0 left-0" 
  />
</div>

<div className='mt-10'>
    <Image src="/img.png" height={904} width={903} alt='img' className='w-full h-auto'></Image>
</div>



  </div>
  )
}

export default Categories
