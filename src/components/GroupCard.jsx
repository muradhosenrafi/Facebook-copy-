import Image from "../components/Image"
import gorp from "../assets/one.png"
import Flex from "./Flex"

const GroupCard = () => {
  return (
    <div>
     <Flex className="gap-5">
         <div className="w-[52px] h-[52px] rounded-full">
        <Image src={gorp} alt="one.gpj"/>
      </div>
      <div>
        <h1 className="font-medium text-base font-robot">Rashid Khan</h1>
        <p className="font-normal text-xs font-robot text-navtext">Group Admin</p>
      </div>
     </Flex>
    </div>
  )
}

export default GroupCard