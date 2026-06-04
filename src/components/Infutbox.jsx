



const Infutbox = ({className,text,type}) => {
  return (
 <div className={`justify-center items-center flex ${className}`}>
      <div className="relative w-[337px]">
      <input
        type={type}
        id="email"
        placeholder=" "
        className="peer w-full border-b text-base font-medium font-monster  border-gray-300 py-3 pl-2 outline-none"
      />

      <label
        htmlFor="email"
        className="
          absolute left-0 top-3 text-inptext
           text-[14px]
    font-medium
    text-[#24786D]
    font-monster
    transition-all duration-300
    peer-focus:-top-4
    peer-focus:text-[14px]
    peer-focus:text-[#24786D]
    peer-[:not(:placeholder-shown)]:-top-4
    peer-[:not(:placeholder-shown)]:text-[14px]
  "
      >
      {text}
      </label>
    </div>
 </div>
  )
}

export default Infutbox