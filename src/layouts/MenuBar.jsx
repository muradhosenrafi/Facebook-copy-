import Container from "../components/Container";
import Flex from "../components/Flex";
import { NavLink } from "react-router-dom";
import { RiMessage3Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";

const MenuBar = () => {
return ( <section className="fixed bottom-0 left-0 w-full bg-white  shadow-lg z-50"> <Container> <Flex className="justify-between items-center py-3 px-2">

      <NavLink to="/home">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center transition-all duration-300 ${
              isActive
                ? "-translate-y-2 text-inptext"
                : "text-navtext"
            }`}
          >
            <RiMessage3Fill className="w-6 h-6" />

            <p className="text-[11px] sm:text-sm font-medium">Message </p></div>
        )}
      </NavLink>

      <NavLink to="/notification">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center transition-all duration-300 ${
              isActive
                ? "-translate-y-2 text-inptext"
                : "text-navtext"
            }`}
          >
            <IoNotifications className="w-6 h-6" />

            <p className="text-[11px] sm:text-sm font-medium">
              Notification</p></div>
        )}
      </NavLink>

      <NavLink to="/grouppage">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center transition-all duration-300 ${
              isActive
                ? "-translate-y-2 text-inptext"
                : "text-navtext"
            }`}
          >
            <FaUserGroup className="w-6 h-6" />

            <p className="text-[11px] sm:text-sm font-medium">
              Group</p></div>
        )}
      </NavLink>

      <NavLink to="/setting">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center transition-all duration-300 ${
              isActive
                ? "-translate-y-2 text-inptext"
                : "text-navtext"
            }`}
          >
            <RiSettings4Fill className="w-6 h-6" />

            <p className="text-[11px] sm:text-sm font-medium">Settings</p></div>
        )}
      </NavLink>

    </Flex>
  </Container>
</section>


);
};

export default MenuBar;
