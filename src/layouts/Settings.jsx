import { CgArrowLeft } from "react-icons/cg"
import Container from "../components/Container"
import { LiaKeySolid } from "react-icons/lia";
import SettingCard from "../components/SettingCard"
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Image from "../components/Image"
import frofile from "../assets/profilemin.png"
import { HiMiniQrCode } from "react-icons/hi2";


const Settings = () => {
  return (
    
<section className="min-h-screen">
  <Container className="bg-[#000E08] w-full flex flex-col h-full">

<div className="my-[52px] flex-shrink-0">
                <div className="relative flex items-center justify-center pt-[61px]">
  
  <div className="absolute left-[0px]">
    <CgArrowLeft className="text-3xl hover:scale-110 hover:-translate-x-1  transition-transform duration-300 cursor-pointer text-white" />
  </div>

  <h1 className="text-center font-robot text-[20px] font-medium text-white">Settings</h1>
</div>

</div>
    <div className=" rounded-t-4xl bg-white">
     <div className="flex items-center justify-center pt-3">
       <div className="w-[30px] h-[3px] bg-[#E6E6E6] rounded-full"></div>
     </div>
      <div className="flex justify-between items-center px-5 pt-[50px]">
     <div className="flex gap-4">
         <div className="h-[60px] w-[60px] rounded-full ">
          <Image src={frofile}/>
        </div>
        <div>
          <h1 className="font-bold text-xl font-robot">Nazrul Islam</h1>
          <p className="font-normal text-base font-robot text-navtext">Never give up 💪</p>
        </div>
     </div>
      <div className="px-5">
            <HiMiniQrCode className="text-4xl text-inptext cursor-pointer " />
      </div>

      </div>
      <div className="w-full h-[1px] bg-[#F5F6F6] mt-5 "></div>
  <SettingCard 
  icon={<LiaKeySolid />}
  className=""
  heding="Account"
  title="Privacy, security, change number"/>

  <SettingCard 
  icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
  className=""
  heding="Chat"
  title="Chat history,theme,wallpapers"/>

  <SettingCard 
  icon={<IoMdNotificationsOutline />}
  className=""
  heding="Notifications"
  title="Notifications"/>

  <SettingCard 
  icon={<IoHelpCircleOutline />}
  className=""
  heding="Help"
  title="Help center,contact us, privacy policy"/>

  
  <SettingCard 
  icon={<LuArrowDownUp />}
  className=""
  heding="Storage and data"
  title="Network usage, stogare usage"/>

  <SettingCard 
  icon={<HiOutlineUserGroup />}
  className=""
  heding="Invite a friend"/>


    </div>
  </Container>
</section>
  )
}

export default Settings