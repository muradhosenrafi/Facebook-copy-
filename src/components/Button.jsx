

const Button = ({classNameone,classNametow,text,className}) => {
  return (
<div className={`flex justify-center pt-[30px] ${className}`}>
    <div className={`w-[327px] h-[48px] cursor-pointer bg-[#797c7b80] duration-300 hover:bg-inptext rounded-2xl ${classNameone}`}>
   <h3 className={`font-robot text-base py-[16px] justify-center flex font-medium hover:text-[#ffff] text-[#000E08] ${classNametow}`}>{text}</h3>
</div>
</div>

  ) 
}

export default Button             