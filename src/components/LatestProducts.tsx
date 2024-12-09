

import React from 'react'

const LatestProducts = () => {
  return (
    
<div className="px-8 py-8"> {/* Increased left and right padding for more space */}
  {/* Heading */}
  <h1 className="text-4xl font-semibold text-[#151875] mb-6 text-center">
    Latest Products
  </h1>

  {/* Words below heading */}
  <div className="flex justify-center space-x-6 mb-8">
    <p className="text-sm font-medium text-[#FB2E86] underline">New Arrival</p>
    <p className="text-sm font-medium text-[#151875]">Best Seller</p>
    <p className="text-sm font-medium text-[#151875]">Featured</p>
    <p className="text-sm font-medium text-[#151875]">Special Offer</p>
  </div>

  {/* Image Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 container mx-auto px-8">
    {/* Image 1 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/1.png"
        alt="Image 1"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 2 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/2.png"
        alt="Image 2"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 3 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/3.png"
        alt="Image 3"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 4 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/4.png"
        alt="Image 4"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 5 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/5.png"
        alt="Image 5"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 6 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <img
        src="/6.png"
        alt="Image 6"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  </div>
</div>


  )
}

export default LatestProducts
