

"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(
     <nav className="w-full border-b-2 border-gray-300 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold ml-32">Hekto</h1>



            <div className="hidden md:flex gap-8 mr-28">
            <Link href="/" className="text-sm font-normal">Home</Link>
            <Link href="/pages" className="text-sm font-normal">Pages</Link>
            <Link href="/products" className="text-sm font-normal">Products</Link>
            <Link href="/blog" className="text-sm font-normal">Blog</Link>
            <Link href="/shop" className="text-sm font-normal">Shop</Link>
            <Link href="/about" className="text-sm font-normal">About</Link>
            <Link href="/contact" className="text-sm font-normal">Contact</Link>
            </div>

            <div className="hidden md:flex gap-4">
            <div className="relative">
             <Input  className="bg-[#f55f5] rounded"/>
             <Search className="bg-[#FB2E86] text-white absolute right-2 top-2 "/>
             </div>

             
            </div>



            <Sheet>
              <SheetTrigger className="flex md:hidden">
              <Button variant={"outline"} size={"icon"} className="rounded-full" >
                <Menu />
             </Button>
              </SheetTrigger>
              <SheetContent
               className={`${
                isOpen ? 'bg-black' : 'bg-white' 
              } md:hidden absolute top-0 right-0 w-full h-screen z-50 transition-all duration-300`}>
                <SheetHeader>
                  <SheetTitle> Exclusive </SheetTitle>
                </SheetHeader>


                  <div className="flex flex-col gap-6 mt-6"> 
                  <Link href="/" className="text-sm font-normal">Home</Link>
                    <Link href="/pages" className="text-sm font-normal">Pages</Link>
                        <Link href="/products" className="text-sm font-normal">Products</Link>
                        <Link href="/blog" className="text-sm font-normal">Blog</Link>
                        <Link href="/shop" className="text-sm font-normal">Shop</Link>
                        <Link href="/about" className="text-sm font-normal">About</Link>
                         <Link href="/contact" className="text-sm font-normal">Contact</Link>

                </div>

                    <div className="mt-4">
                  <div className="relative">
                   <Input className="bg-[#f55f5] rounded"/>
                   <Search className="absolute right-2 top-2"/>
                   </div>
                   <div className="mt-4 space-x-2">
                  
                  
                        </div>
                   </div>
              </SheetContent>

            </Sheet>
</div>
</nav>
    )}


    export default Navbar