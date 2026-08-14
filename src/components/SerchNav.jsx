import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const SerchNav = ({right,className}) => {
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    
<div className="relative flex items-center">


      <div
        onClick={() => setOpen(true)}
        className="w-[44px] h-[44px] rounded-full  border border-text flex items-center justify-center cursor-pointer"
      >
        <IoSearch className={`text-[22px] text-text ${className}`} />
      </div>

      <input
      className=""
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          if (value === "") setOpen(false);
        }}
        placeholder="Search..."
        className={`
          absolute ${right} h-[40px] text-xs font-monster bg-[#000E08] text-text font-semibold rounded-full border border-text px-3 outline-none
          transition-all duration-300
          ${open ? "w-[180px] opacity-100" : "w-0 opacity-0"}
        `}
      />
    </div>
  )
}


export default SerchNav