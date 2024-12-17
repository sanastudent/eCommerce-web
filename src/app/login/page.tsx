



'use client'; 

import Login from "@/components/ui/Login"; 
import Image from "next/image";
import Footer from "@/components/ui/Footer";


const Page = () => {
  return (
    <>
    <div>
      <Login />  {/* Render the Login component here */}
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
  );
};

export default Page;  // Export the Page component as default
