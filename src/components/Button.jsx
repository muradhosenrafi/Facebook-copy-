

const Button = ({classNameone,classNametow,text,className,onClick}) => {
  return (
<div onClick={onClick} className={`flex justify-center sm:pt-8  pt-6 ${className}`}>
    <div className={`max-w-[327px] w-full h-12 cursor-pointer transition-all bg-[#797c7b80] duration-300 hover:bg-inptext rounded-2xl ${classNameone}`}>
   <h3 className={`font-robot text-base text-sm sm:text-base flex items-center justify-center h-full font-medium  hover:text-[#ffff] text-[#000E08] ${classNametow}`}>{text}</h3>
</div>
</div>

  ) 
}

export default Button             