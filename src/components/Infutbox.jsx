import { FaRegEyeSlash } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { useState } from "react";

const Infutbox = ({ className, text, type, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`justify-center items-center flex ${className}`}>
      <div className="relative w-[337px]">
        <input
        onChange={onChange}
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          id={text}
          placeholder=" "
          className="peer w-full border-b border-gray-300 py-3 pl-2 pr-10 outline-none text-base font-medium font-monster"
        />

        <label
          htmlFor={text}
          className="
            absolute left-0 top-3
            text-[14px] font-medium font-monster text-[#24786D]
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

        {type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-[#24786D]"
          >
            {showPassword ? <BsEye />  :  <FaRegEyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Infutbox;