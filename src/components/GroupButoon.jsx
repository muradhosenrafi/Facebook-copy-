

const GroupButoon = ({text,className}) => {
  return (
    <div>
         <div className={`bg-[#20a09014] cursor-pointer w-[107px] h-[38px] rounded-[20px] text-center py-[12px] px-[16px]  items-center justify-center flex ${className}`}>
<h3 className="text-xs font-robot font-medium">{text}</h3>
         </div>
    </div>
  )
}

export default GroupButoon