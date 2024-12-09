
import Footer from "@/components/ui/Footer"
import ImageGallery from "@/components/ui/ImageGallery"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Products(){
    return(
          <>
            <div className="w-full h-[286px] bg-[#F6F5FF] flex justify-start pl-4 sm:pl-8 md:pl-16 ">
       <div className="font-josefin text-left ml-16">
       <h1 className="text-3xl mt-10 sm:text-3xl md:text-3xl font-semibold">Product Details</h1>
        <p className="mt-2 text-xsm sm:text-base md:text-lg">
        Home . Pages <span className="text-[#FB2E86]">Product Details</span>
      </p>
      </div>
      </div>

              {/* Page starts from here  */}
            
  <div className=" ml-20 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">

    {/* Left Section: Three vertically stacked images */}
    <div className="flex flex-col w-full md:w-[200px] mb-6 md:mb-0 md:mr-6">
      <div className="mb-4">
        <Image src="/hp.png" width={151} height={155} alt="hp" />
      </div>
      <div className="mb-4">
        <Image src="/hp2.png" width={151} height={155} alt="hp2" />
      </div>
      <div>
        <Image src="/hp3.png" width={151} height={155} alt="hp3" />
      </div>
    </div>

    {/* Right Section: One large image */}
    <div className="w-full md:w-[760px]">
      <Image src="/mp.png" width={357} height={487} alt="main" />
    </div>

  </div>

<div className="ml-24 mt-20 mb-16 font-josefin text-[#151875]">
  <div className="flex gap-10">
  <h1 className=" font-semibold">Description</h1>
  <h1 className=" font-semibold">Additional Info</h1>
  <h1 className=" font-semibold">Reviews</h1>
  <h1 className="font-semibold">Video</h1>
</div>
</div>

<div className="font-josefin ml-20">
        <h1 className="text-[#151875] font-semibold  ">More details</h1>

        <div className="space-y-4 mt-4">
          <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
            <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
          </p>
          <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
            <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
          </p>
          <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
            <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
          </p>
          <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
            <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
          </p>
          </div>
          </div>


{/* Related products area */}

          <div className="px-8 sm:px-16 lg:px-44 py-4">
  {/* Heading */}
  <div className=" mb-8">
    <h1 className="font-josefin  mt-10 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]">
      Related Products
    </h1>
  </div>

  {/* Image Grid */}
  <div className="container mr-24 mx-auto px-4 md:px-8" >
  
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Image 1 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <Image
        src="/man.png"
        alt="man" width={270} height={361}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 2 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <Image
        src="/girl.png"
        alt="girl" width={270} height={361}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 3 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <Image
        src="/sgirl.png"
        alt="sgirl" width={270} height={361}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Image 4 */}
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <Image
        src="/stgirl.png"
        alt="stgirl" width={270} height={361}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  </div>



</div>
</div>



<div className="mt-10 flex justify-center items-center">
  <Image 
    src="/img.png" 
    height={904} 
    width={903} 
    alt="img" 
    className="w-full h-auto" 
  />
</div>


<Footer/>

          
          </>


    )
}