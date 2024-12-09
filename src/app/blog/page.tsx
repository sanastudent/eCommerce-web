 
 import Footer from "@/components/ui/Footer";
import Image from "next/image";

 export default function Blog(){
    return(
        <>
         
         <div className="flex flex-row px-4 mt-14">
  {/* Left Section */}
  <div className="w-full lg:w-3/5">
    <div className="ml-20">
      <Image src="/g1.png" width={870} height={453} alt="girl" />
    </div>

    <div className="ml-20 mt-10">
      <Image src="/date.png" width={360} height={23} alt="date" />
    </div>

    <div className="w-[852px] h-[107px] ml-20 mt-8">
      <h1 className="text-[#151875] font-josefin font-semibold">Mauris at orci orci non volupate diam tincidunt nec.</h1>
      <p className="text-[#8A8FB9] font-josefin text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quidem unde aliquam cum consequatur, harum laboriosam, accusantium explicabo nihil?</p>
    </div>

    <div className="ml-20">
      <Image src="/read.png" width={95} height={22} alt="read" />
    </div>

    {/* 2nd part */}
    <div className="ml-20 mt-10">
      <Image src="/hair.png" width={870} height={453} alt="hair" />
    </div>

    <div className="ml-20 mt-10">
      <Image src="/date.png" width={360} height={23} alt="date" />
    </div>

    <div className="w-[852px] h-[107px] ml-20 mt-8">
      <h1 className="text-[#151875] font-josefin font-semibold">Mauris at orci orci non volupate diam tincidunt nec.</h1>
      <p className="text-[#8A8FB9] font-josefin text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quidem unde aliquam cum consequatur, harum laboriosam, accusantium explicabo nihil?</p>
    </div>

    <div className="ml-20">
      <Image src="/read.png" width={95} height={22} alt="read" />
    </div>

    {/* 3rd part */}
    <div className="ml-20 mt-10">
      <Image src="/cap.png" width={870} height={453} alt="cap" />
    </div>

    <div className="ml-20 mt-10">
      <Image src="/date.png" width={360} height={23} alt="date" />
    </div>

    <div className="w-[852px] h-[107px] ml-20 mt-8">
      <h1 className="text-[#151875] font-josefin font-semibold">Mauris at orci orci non volupate diam tincidunt nec.</h1>
      <p className="text-[#8A8FB9] font-josefin text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quidem unde aliquam cum consequatur, harum laboriosam, accusantium explicabo nihil?</p>
    </div>

    <div className="ml-20">
      <Image src="/read.png" width={95} height={22} alt="read" />
    </div>

    <div className="flex justify-center mt-10">
      <Image src="/number.png" width={236} height={24} alt="number" />
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-2/5 lg:ml-10 mt-10">
    <div>
      <Image src="/search.png" width={270} height={77} alt="search" />
    </div>

    <div>
      <Image src="/categories.png" width={254} height={161} alt="categories" />
    </div>

    <div>
      <Image src="/recent.png" width={120} height={22} alt="recent" />
    </div>

    <div>
      <Image src="/tour1.png" width={250} height={201} alt="tour" />
    </div>

    <div>
      <Image src="/sale.png" width={129} height={22} alt="sale" />
    </div>

    <div>
      <Image src="/tour2.png" width={250} height={201} alt="tour" />
    </div>

    <div>
      <Image src="/offer.png" width={129} height={22} alt="sale" />
    </div>

    <div>
      <Image src="/item.png" width={250} height={201} alt="tour" />
    </div>

    <div>
      <Image src="/follow.png" width={126} height={78} alt="follow" />
    </div>

    <div>
      <Image src="/tags.png" width={47} height={22} alt="tags" />
    </div>

    <div>
      <Image src="/tagn.png" width={228} height={64} alt="tags" />
    </div>
  </div>
</div>

<Footer/>







        </>
    )
 }