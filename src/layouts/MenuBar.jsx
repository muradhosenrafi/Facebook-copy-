import Container from "../components/Container"
import { RiMessage3Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import Flex from "../components/Flex";


const MenuBar = () => {
  return (
  <section>
    <Container  className="">
     <div className="w-full bg-[#FFF] py-5 px-5">
        <Flex className="justify-between">
  <div className="flex group cursor-pointer flex-col items-center">
    <RiMessage3Fill className="w-[26px] h-[26px] text-navtex  text-navtext group-hover:text-inptext duration-300" />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium font-robot">Message</p>
  </div>

  <div className="flex group cursor-pointer flex-col items-center">
    <IoNotifications className="w-[26px] h-[26px] text-navtext group-hover:text-inptext duration-300" />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium font-robot">Notification</p>
  </div>

  <div className="flex group cursor-pointer flex-col items-center">
    <FaUserGroup className="w-[26px] h-[26px] text-navtext group-hover:text-inptext duration-300 " />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium  font-robot">Group</p>
  </div>

  <div className="flex group cursor-pointer flex-col items-center">
    <RiSettings4Fill className="w-[26px] h-[26px] text-navtext group-hover:text-inptext duration-300 " />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium  font-robot">Settings</p>
  </div>
</Flex>
     </div>
    </Container>
  </section> 
  ) 
}

export default MenuBar 