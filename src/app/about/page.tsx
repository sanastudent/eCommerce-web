import Feature from "@/components/Feature"
import { TableOfContents } from "lucide-react"
import Image from "next/image";


export default function About(){
    return(
        <>

<div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16 ">
       <div className="font-josefin text-left ml-16">
       <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">About Us</h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
      Home . Pages <span className="text-[#FB2E86]">About us</span>
      </p>
      </div>
      </div>

        <div className="flex items-center mt-10 ml-40">
      <div className="">
        <Image src="/about.png" width={570} height={409} alt="about" />
      </div>

      <div className="ml-10">
        <Image src="/about2.png" width={550} height={159} alt="about2"/>
         
         <button className="bg-[#FB2E86] w-[145px] h-[44px] mt-20 text-white">
            Contact US
         </button>
      </div>

      
      </div>

      <Feature/>

        
        
        
        </>
    )
}