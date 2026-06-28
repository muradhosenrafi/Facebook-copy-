
import Container from '../components/Container'
import SerchNav from '../components/SerchNav'
import Image from "../components/Image"
import Flex from '../components/Flex'
import { FaPlus } from "react-icons/fa";

import profile1 from "../assets/profilemin.png"
import profile2 from "../assets/profile3.png"
import profile3 from "../assets/profile2.png"
import profile4 from "../assets/profille4.png"
import profile5 from "../assets/profile1.png"

const Nav = ({className}) => {
  return (
<nav>
    <Container className={`bg-[#000E08] w-full min-h-screen   ${className}`}>
<div className='flex justify-between items-center pt-[61px] px-[24px] pb-[40px] '>
         <SerchNav right="left-[60px]"/>
         <h3 className='font-medium text-2xl font-robot text-[#ffff]'>Home</h3>
         <Image src={profile1} alt="profile png"/>
</div>
  


    <Flex className='justify-between px-5 py-10'>
<div className="flex flex-col items-center">
  <div className="relative">
    <Image
      className="w-[58px] h-[58px] rounded-full border-2 border-white"
      src={profile1}
      alt="my pic png"
    />

    {/* Plus Icon */}
    <div className="absolute bottom-0 right-0 w-[18px] h-[18px] border-1 border-text  cursor-pointer rounded-full bg-white flex items-center justify-center">
      <FaPlus className="text-[10px]" />
    </div>
  </div>
  <p className="text-center font-normal text-xs text-white font-robot mt-[10px] ">My status</p>
</div>


<div className="flex flex-col items-center">
    <Image
      className="w-[58px] h-[58px] rounded-full border-2 border-amber-400"
      src={profile2}
      alt="my pic png"
    />
  <p className="text-center font-normal text-xs text-white font-robot mt-[10px] ">Adil</p>
</div>


  <div className="flex flex-col items-center">
    <Image 
      className="w-[58px] h-[58px] rounded-full border-2 border-[#F5B7BE]"
      src={profile3}
      alt="my pic png"
    />
  <p className="text-center font-normal text-xs text-white font-robot mt-[10px] ">Marina</p>
</div>


<div className="flex flex-col items-center">

    <Image
      className="w-[58px] h-[58px] rounded-full border-2 border-[#98A1F1]"
      src={profile4}
      alt="my pic png"
    />
  <p className="text-center font-normal text-xs text-white font-robot mt-[10px] ">Dean</p>
  </div>


   <div className="flex flex-col items-center">
    <Image
      className="w-[58px] h-[58px] rounded-full border-2 border-[#FBDC94]"
      src={profile5}
      alt="my pic png"
    />
  <p className="text-center font-normal text-xs text-white font-robot mt-[10px]">Max</p>
</div>



    </Flex>

    </Container>
</nav>
  )
}

export default Nav