import Container from "../components/Container"
import { RiMessage3Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";


const MenuBar = () => {
  return (
  <section  className="fixed bottom-0 w-full z-50 ">
    <Container className="">
     <div className="w-full bg-black shadow-lg  px-5">
        <Flex className="justify-between items-center">
  <div className="flex group cursor-pointer flex-col items-center">
    <RiMessage3Fill className="w-[26px] h-[26px] text-navtex  text-navtext group-hover:text-inptext duration-300" />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium font-robot">Message</p>
  </div>

  <div className="flex group cursor-pointer flex-col items-center">
    <IoNotifications className="w-[26px] h-[26px] text-navtext group-hover:text-inptext duration-300" />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium font-robot">Notification</p>
  </div>

<Link to="/grouppage">
  <div className="flex group cursor-pointer flex-col items-center">
    <FaUserGroup className="w-[26px] h-[26px] text-navtext group-hover:text-inptext duration-300 " />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium  font-robot">Group</p>
  </div>

</Link>

<Link to="/setting">
  <div className="flex group cursor-pointer flex-col items-center">
    <RiSettings4Fill className="w-[26px] h-[26px] text-navtext group-hover:text-inptext duration-300 " />
    <p className="font-medium text-base text-navtext group-hover:text-inptext duration-300 group-hover:font-medium  font-robot">Settings</p>
  </div>
</Link>
     {/* <div className="h-[80px]"></div> */}
</Flex>
     </div>
    </Container>
  </section> 
  ) 
}

export default MenuBar 