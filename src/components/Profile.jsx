import { IoAddOutline } from "react-icons/io5";

import Image from "./Image"; 
import profile1 from "../assets/profilemin.png";

const Profile = ({className,profilleimg}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          className={`w-[58px] h-[58px] rounded-full ${className}`}
          src={profilleimg}
          alt="my pic png"
        />

        <div className="absolute bottom-0 right-0 w-[20px] h-[20px] rounded-full border border-text bg-white flex items-center justify-center cursor-pointer">
          <IoAddOutline className="text-base"/>
        </div>
      </div>
    </div>
  );
};

export default Profile;