import { CgArrowLeft } from "react-icons/cg"
import Container from "../components/Container"
import { LiaKeySolid } from "react-icons/lia";
import SettingCard from "../components/SettingCard"
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";



const Settings = () => {
  return (
    
<section className="bg-black relative">
  <Container className="">

<div className="py-[52px]">
                <div className="relative flex items-center justify-center pt-[61px]">
  
  <div className="absolute left-[0px]">
    <CgArrowLeft className="text-3xl cursor-pointer text-white" />
  </div>

  <h1 className="text-center font-robot text-[20px] font-medium text-white">Settings</h1>
</div>

</div>
    <div className="bg-white bottom-28 h-[620px] rounded-t-4xl">
  <SettingCard 
  icon={<LiaKeySolid />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>

  <SettingCard 
  icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>

  <SettingCard 
  icon={<IoMdNotificationsOutline />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>

  <SettingCard 
  icon={<IoHelpCircleOutline />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>

  
  <SettingCard 
  icon={<LuArrowDownUp />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>

  <SettingCard 
  icon={<HiOutlineUserGroup />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>


    </div>
  </Container>
</section>
  )
}

export default Settings