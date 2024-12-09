
import React from 'react'

const Images = () => {
  return (
    <div className="px-8 sm:px-16 lg:px-44 py-4">
  {/* Heading */}
  <div className="text-center mb-8">
    <h1 className="font-josefin mt-10 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]">
      Featured Products
    </h1>
  </div>

  {/* Image Grid */}
  <div className="container mx-auto px-4 md:px-8" >
  
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Image 1 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/Image1.png"
        alt="Image 1"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 2 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/Image4.png"
        alt="Image 2"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 3 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/image3.png"
        alt="Image 3"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 4 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/Image2.png"
        alt="Image 4"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  </div>

  <div className="flex justify-center items-center my-8">
  <img
    src="/points.png"  // Replace with your image path
    alt="points"
    className="w-1/4 sm:w-1/6 md:w-1/8 h-auto object-contain"
  />
</div>

  </div>
</div>

  )
}

export default Images