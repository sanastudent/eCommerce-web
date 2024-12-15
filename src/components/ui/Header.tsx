



import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";



export default function Header(){
    return(
      <>
      

     
      <div className="w-full h-[48px] bg-[#7E33E0] hidden md:flex p-3">
       <div className="w-full flex justify-between items-center">

       {/* Left side (email and phone number) */}
     <div className="flex items-center p-44">
      <p className="flex items-center text-white text-[14px] leading-[24px] mr-6">
        <Mail className="mr-2" />
        mhhasanul@gmail.com
      </p>
      <p className="text-white flex items-center font-semibold ">
        <Phone className="mr-2" />
        (1234)567890
      </p>
    </div>




         <div className=" flex items-center p-40">
            <p className="text-white flex items-center  mr-4">English <ChevronDown /></p>
            <p className="text-white flex items-center  mr-4">USD <ChevronDown /></p>

            <Link href="/login" className="text-white flex items-center  mr-4">
            Login <User/>
            </Link>
            <p className="text-white flex items-center  mr-4">Wishlist <Heart/></p>


            <Link href="/cart">
             <ShoppingCart className="text-white"/>
            </Link>

         </div>
         </div>
         </div>
         


</>

     
    )
}