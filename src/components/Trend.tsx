

import React from 'react'

const Trend = () => {
  return (
    <div className="px-8 sm:px-16 lg:px-44 py-4">
  {/* Heading */}
  <div className="text-center mb-8">
    <h1 className="font-josefin mt-10 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]">
      Trending Products
    </h1>
  </div>

  {/* Image Grid */}
  <div className="container mx-auto px-4 md:px-8">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Row 1: 4 images */}
      <div className="bg-white p-4  rounded-md shadow-md">
        <img
          src="/t1.png"
          alt="Image 1"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <img
          src="/t2.png"
          alt="Image 2"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <img
          src="/t3.png"
          alt="Image 3"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <img
          src="/t4.png"
          alt="Image 4"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Row 2: 3 images */}
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <img
          src="/t5.png"
          alt="Image 5"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <img
          src="/t6.png"
          alt="Image 6"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* 7th image: 3 small images stacked vertically */}
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md col-span-1 sm:col-span-2 md:col-span-1 flex flex-col gap-4">
        <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
          <img
            src="/sm1.png"
            alt="Small Image 1"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
          <img
            src="/sm2.png"
            alt="Small Image 2"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="bg-white p-4  rounded-md shadow-md">
          <img
            src="/sm3.png"
            alt="Small Image 3"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default Trend
