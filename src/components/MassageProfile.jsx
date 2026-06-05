import Image from "../components/Image"
import Flex from "../components/Flex"

import { FiTrash2 } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";

const MassageProfile = ({hedname,title,notification,time,profilleimg,className}) => {
    const [open, setOpen] = useState(false);
  return (

<div className={`relative overflow-hidden ${className}`}>
  {/* Action Buttons */}
  
  <div className="absolute inset-y-0 right-4 flex items-center gap-4">
    <div className="w-[36px] h-[36px]  flex justify-center items-center rounded-full bg-black">
      <IoNotifications className="text-white text-xs" />
    </div>

    <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-red-600">
      <FiTrash2 className="text-white text-xs" />
    </div>
  </div>

  {/* Main Card */}
<motion.div
drag="x"
    dragConstraints={{ left: -140, right: 0 }}
    animate={{ x: open ? -140 : 0 }}
    onDragEnd={(event, info) => {
    if (info.offset.x < -50) {
      setOpen(true);

    setTimeout(()=> {
      setOpen(false); 
    },500)
}
  }}
    className="relative z-10 py-5 bg-white hover:bg-[#F1F6FA] duration-200"
    >

<div className="flex items-center justify-between gap-4 px-5">
  
  {/* Left: profile */}
  <div className="flex items-center gap-3">
    <Image src={profilleimg} alt="profile png" />

    <div>
      <h3 className="text-sm font-medium font-robot text-[20px] ">{hedname}</h3>
      <p className="text-xs text-navtext font-robot font-normal">{title}</p>
    </div>
  </div>


  <div className="flex items-center gap-3">
   <Flex className= "flex-col">
     <p className="text-xs text-navtext font-robot font-normal">{time}</p>

 <div className="flex justify-end pt-2">
       <div className="w-[22px] h-[22px] bg-[#F04A4C] text-white text-xs font-medium flex items-center font-robot justify-center rounded-full">
     <p>{notification}</p>
    </div>
 </div>
   </Flex>
  </div>

</div>

</motion.div>
</div>

  )
}

export default MassageProfile


 