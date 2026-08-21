import Image from "../components/Image"
import defaultProfile from "../assets/rafi12345.jpeg"
import Flex from "./Flex"

const GroupCard = ({ name, profile }) => {
  return (
    <div>
     <Flex className="gap-5">
         <div className="w-[52px] h-[52px] rounded-full">
        <Image src={profile || defaultProfile} alt={`${name || "Admin"} profile`}/>
      </div>
      <div>
        <h1 className="font-medium text-base font-robot">{name || "Unknown"}</h1>
        <p className="font-normal text-xs font-robot text-navtext">Group Admin</p>
      </div>
     </Flex>
    </div>
  )
}

export default GroupCard