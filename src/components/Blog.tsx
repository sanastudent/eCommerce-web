
import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
<div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
  {/* Heading */}
  <h1 className="font-josefin text-4xl font-bold mb-6 sm:mb-8 md:mb-10">Latest Blog</h1>

  {/* Images */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
    <div className="w-32 sm:w-40 md:w-52 lg:w-64 xl:w-72">
      <Image src="/b3.png" alt="Image 1" width={200} height={250} layout="responsive" />
    </div>
    <div className="w-32 sm:w-40 md:w-52 lg:w-64 xl:w-72">
      <Image src="/b2.png" alt="Image 2" width={200} height={250} layout="responsive" />
    </div>
    <div className="w-32 sm:w-40 md:w-52 lg:w-64 xl:w-72">
      <Image src="/b1.png" alt="Image 3" width={200} height={250} layout="responsive" />
    </div>
  </div>
</div>

  )
}

export default Blog
