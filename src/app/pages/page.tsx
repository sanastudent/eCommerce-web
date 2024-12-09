

import { Input } from "@/components/ui/input";
import { TableOfContents } from "lucide-react";
import Products from "../../components/ui/ImageGallery";
import ImageGallery from "../../components/ui/ImageGallery";
import Footer from "@/components/ui/Footer";


export default function Pages(){
    return(
        <>
         <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16 ">
       <div className="font-josefin text-left ml-16">
       <h1 className="text-3xl sm:text-3xl md:text-3xl font-semibold">Shop Grid Default</h1>
        <p className="mt-2 text-xsm sm:text-base md:text-lg">
        Home . Pages <span className="text-[#FB2E86]">Shop Grid Default</span>
      </p>
      </div>
      </div>


{/* ecommerce accessories item area */}
<div className="px-14 py-4 mt-12 mb-11">
  {/* Heading and Result Line */}
  <div className="mb-4 ml-36 flex flex-col sm:flex-row sm:justify-between sm:items-center">
    <div>
      <h1 className="font-josefin text-[#151875] text-[18px] sm:text-[14px] md:text-[16px] font-semibold">
        Ecommerce Accessories & Fashion Items
      </h1>
      <p className="font-josefin text-[#8A8FB9] text-[10px] sm:text-[12px] md:text-[14px]">
        About 9,620 results (0.62 seconds)
      </p>
    </div>

    {/* Inputs and Sort Section */}
    <div className="flex mr-24 sm:justify-end items-center space-x-4 mt-2 sm:mt-0">  {/* Adjusted margin-top */}
      <div className="flex items-center space-x-4">
        <p className="font-josefin text-[#8A8FB9]">Per Page:</p>
        <input className="bg-[#f55f5] rounded p-2 border-2 w-24 h-5" />
        <p className="font-josefin text-[#8A8FB9]">Sort By:</p>
        <input className="bg-[#f55f5] rounded p-2 border-2 w-24 h-5 placeholder:text-sm" placeholder="Best Match" />
        <p className="font-josefin text-[#8A8FB9]">View</p>
        <TableOfContents />
        <input className="bg-[#f55f5] rounded p-2 border-2 w-44 h-5" />
      </div>
    </div>
  </div>
</div>

<ImageGallery/>


<Footer/>


        
        
        </>
    )
}