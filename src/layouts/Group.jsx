import Container from "../components/Container"
import { CgArrowLeft } from "react-icons/cg";
import Flex from "../components/Flex"
import GroupButoon from "../components/GroupButoon"
import GroupCard from "../components/GroupCard";
import Profile from "../components/Profile";
import { FaPlus } from "react-icons/fa";
import Button from "../components/Button"

import profileone from "../assets/grop1.png"
import profiletow from "../assets/profile3.png"
import profilethree from "../assets/profilemin.png"
import profilefive from "../assets/profile2.png"
import profilesix from "../assets/profille4.png"
import profilefour from "../assets/gop2.png"

const Group = () => {
  return (

<section>
    <Container className=" ">
        <div className="px-5">
            <div className="relative flex items-center justify-center pt-[61px]">
  
  <div className="absolute left-[0px]">
    <CgArrowLeft className="text-3xl cursor-pointer" />
  </div>

  <h1 className="text-center font-robot text-base font-medium">Create Group</h1>
</div>

<div>
    <p className="font-medium text-base font-robot text-navtext pt-[30px]">Group Description</p>
    <h5 className="text-[40px] font-bold font-monster text-[#20A090] py-[20px] w-[320px]">Make Group  for Team Work</h5>
</div>
<Flex className="gap-3 ">
    <GroupButoon text="Group work"/>
<GroupButoon className="!w-[147px]" text="Team  relationship"/>
</Flex>

<p className="font-medium text-base py-[30px] font-robot text-navtext">Group Admin</p>

<GroupCard/>
<p className="font-medium text-base font-robot py-[25px] text-navtext">Invited Members</p>
<div className="grid grid-cols-4 gap-5 place-items-center">
    
<Profile profilleimg={profileone} className="!w-[70px] !h-[70px]"/>
<Profile profilleimg={profiletow} className="!w-[70px] !h-[70px]"/>
<Profile profilleimg={profilethree} className="!w-[70px] !h-[70px]"/>
<Profile profilleimg={profilefour} className="!w-[70px] !h-[70px]"/>
<Profile profilleimg={profilefive} className="!w-[70px] !h-[70px]"/>
<Profile profilleimg={profilesix} className="!w-[70px] !h-[70px]"/>

<div className="w-[70px] h-[70px] cursor-pointer rounded-full  border-2 border-dashed border-gray-300 flex items-center justify-center">
  <FaPlus className="text-gray-400 text-xl" />
</div>
</div>
<Button 
className="pt-[86px] pb-[30px]"
classNameone="!w-[410px] !bg-inptext"
classNametow="!text-white "
text="Create"
/>
        </div>

    </Container>
</section>
  )
}

export default Group