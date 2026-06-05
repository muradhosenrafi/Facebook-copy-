import { FiTrash2 } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";



const Notafication = () => {
  return (
    <div>
        <div className="flex gap-3">
         <div className="w-[36px] h-[36px]  flex justify-center items-center rounded-full bg-black">
     <IoNotifications className="text-white text-base" />
         </div>
         <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-red-600">

          <FiTrash2 className="text-white text-base"/> 
         </div>
</div>
    </div>
  )
}

export default Notafication