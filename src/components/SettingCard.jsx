
import Flex from "./Flex"



const SettingCard = ({className,heding,title,icon}) => {
  return (
   


    <div className={`py-[30px] px-[20px] ${className}`}>
     <Flex className="gap-5">
         <div className="w-[44px] h-[44px] flex justify-center items-center text-navtext text-3xl bg-[#F2F8F7] rounded-full">
        {icon}
      </div>
      <div>
        <h1 className="font-medium text-base font-robot">{heding}</h1>
        <p className="font-normal text-xs font-robot text-navtext">{title}</p>
      </div>
     </Flex>
    </div>



  )
}

export default SettingCard