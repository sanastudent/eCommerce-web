


import Image from "next/image";

import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

export default function Footer(){
    return(
        <>
       
<footer className="bg-[#EEEFFB] text-[#9DA0AE] py-8 mt-16 w-1440 h-440">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-wrap justify-between">
      
      {/*  Footer Left (Logo or Information)  */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-black">Hekto</h2>
        {/* <Input placeholder="Enter Email Address"/>
        <Search className=" text-white absolute right-2 top-2"/>
        <Button className="bg-[#FB2E86]">Sign Up</Button> */}
        <div className="w-[377px] h-[44] flex items-center justify-between space-x-2">
  <div className="relative flex items-center">
    <input 
      type="email" 
      placeholder="Enter Email Address" 
      className="px-4 py-2 rounded-l-md border border-gray-300"
    />
    <Search className="text-white absolute right-2 top-2" />
  </div>
  <Button className="bg-[#FB2E86] px-6 py-2 rounded-md">Sign Up</Button>
</div>

        <p className="text-sm">Contact info</p>
        <p className="text-sm">17 Princess Road,London,Greater London NW1 8JR,UK</p>
      </div>

       {/*  Footer second row  */}
       <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-sm">Laptops & Computers </p>
        <p>Cameras & Photography</p>
        <p>Smart Phones & Tablets</p>
        <p>Video Games & Consoles</p>
        <p>Waterproo Headphones</p>
      </div>
       
        {/*  Footer third row  */}
        <div className="flex flex-col space-y-4">
        <h2 className="text-2xl ">Customer Care</h2>
        <p className="text-sm">My Account</p>
        <p>Discount</p>
        <p>Returns</p>
        <p>Orders History</p>
        <p>Order Tracking</p>
      </div>
      {/* Footer fourth (Quick Links)  */}
    
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl ">Pages</h2>
        <p className="text-1xl">Blog</p>
        <p className="text-sm">Browse the shop</p>
        <p className="">Category</p>
        <p>Pre-built pages</p>
        <p>Visual Composer Elements</p>
        <p>WooCommerce Pages</p>
      </div>
      </div>
    

{/*     
     Footer Bottom (Copyright Section)  */}
   
   <div className="text-center mt-8 text-sm w-full">
  <p className="bg-[#E7E4F8] flex justify-center items-center w-full">
    <span className="mr-48">© Webecy - All rights reserved.</span>
    <div className="flex space-x-3 text-[8px]">
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
  </p>
</div>


  </div>

</footer>
</>
    )
}