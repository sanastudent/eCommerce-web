import HeroSection from "@/components/HeroSection";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Images from "../components/ui/Images";
import LatestProducts from "@/components/LatestProducts";
import Unique from "@/components/Sofa";
import Sofa from "@/components/Sofa";
import Trend from "@/components/Trend";
import Discount from "@/components/Discount";
import Categories from "@/components/Categories";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div>
    
      <HeroSection/>
      <Images/>
      <LatestProducts/>
      <Sofa/>
      <Trend/>
      <Discount/>
      <Categories/>
      <Blog/>



      <Footer/>
      
    </div>
  )}