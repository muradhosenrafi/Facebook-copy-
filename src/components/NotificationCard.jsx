import Image from "../components/Image"
import { useState } from "react";
import profile from "../assets/gop2.png"
import { PiDotsThreeCircleThin } from "react-icons/pi";
import Delet from "./Delet";

const NotificationCard = ({icon}) => {
      const [showMenu, setShowMenu] = useState(false);
  return (
   <div className="relative flex justify-between items-center">

      {/* Left */}
      <div className="flex gap-5">
        <div className="relative w-[70px] h-[70px]">
          <Image
            src={profile}
            alt="profile pic"
            className="w-full h-full rounded-full object-cover"
          />

          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
            {icon}
          </div>
        </div>

        <div>
          <h1 className="text-[20px] font-medium font-robot">
            Adil Adnan
          </h1>

          <p className="text-base text-navtext w-[220px]">
            highlighted a post for you to check out
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="relative">
        <PiDotsThreeCircleThin
          onClick={() => setShowMenu(!showMenu)}
          className="text-4xl cursor-pointer hover:rotate-90 transition-all duration-300"
        />

        {/* Popup */}
        <div
          className={`absolute right-10 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 origin-right
          ${
            showMenu
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-95 translate-x-5 pointer-events-none"
          }`}
        >
          <Delet />
        </div>
      </div>

    </div>
  );
};

export default NotificationCard