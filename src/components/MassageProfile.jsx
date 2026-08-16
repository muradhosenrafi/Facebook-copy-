import Image from "../components/Image";
import Flex from "../components/Flex";

import { FiTrash2, FiMoreVertical } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";



const MassageProfile = ({
  hedname,
  title,
  notification = 0,
  time,
  profilleimg,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [read, setRead] = useState(false);

    const [showMenu, setShowMenu] = useState(false);
    const [blocked, setBlocked] = useState(false);

  const handleDragEnd = ( _, info) => {
    if (info.offset.x < - 60) {
      setOpen(true);
    }

    if (info.offset.x > 60) {
      setOpen(false);
    }
  };

  if (deleted) return null;




  let handelBlock =()=>{
   
    
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>

      {/* ================= Action Buttons ================= */}
      <div className="absolute inset-y-0 right-3 flex items-center gap-2">

        <button
          type="button"
          onClick={() => setRead(true)}
          className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          {read ? (
            <MdDone className="text-white text-base" />
          ) : (
            <IoNotifications className="text-white text-base" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setDeleted(true)}
          className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center"
        >
          <FiTrash2 className="text-white text-base" />
        </button>

      </div>

      {/* ================= Main Card ================= */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -125, right: 0 }}
        dragElastic={0.1}
        animate={{ x: open ? -125 : 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onDragEnd={handleDragEnd}
        onClick={() => setOpen(false)}
        className={`
          relative
          z-10
          w-full
          px-5
          py-3
          border-b
          border-[#E9EEEE]
          cursor-pointer
          ${
            read
              ? "bg-white"
              : "bg-[#F8FBFD]"
          }
        `}
      >
        <div className="flex items-center justify-between gap-3">

          {/* Profile + Message */}
          <div className="flex items-center gap-3 min-w-0">

            <div className="relative shrink-0">

              <Image
                src={profilleimg}
                alt={`${hedname} profile`}
                className="w-12 h-12 rounded-full object-cover"
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  w-3
                  h-3
                  rounded-full
                  bg-green-500
                  border-2
                  border-white
                "
              />

            </div>

            <div className="min-w-0">
              <h3
                className={`
                  truncate
                  text-[15px]
                  font-robot
                  ${
                    read
                      ? "font-medium text-black"
                      : "font-bold text-black"
                  }
                `}
              >
                {hedname}
              </h3>

              <p
                className="
                  mt-1
                  truncate
                  max-w-[180px]
                  sm:max-w-[300px]
                  text-xs
                  text-navtext
                  font-robot
                "
              >
                {title}
              </p>
            </div>

          </div>

          {/* Time + Notification */}
          <div className="shrink-0 flex items-center gap-2">

            <Flex className="flex-col items-end">

              <p className="text-[10px] sm:text-[11px] text-navtext font-robot">
                {time}
              </p>

              {!read && notification > 0 && (
                <span
                  className="
                    mt-1
                    w-5
                    h-5
                    rounded-full
                    bg-[#F04A4C]
                    text-white
                    text-[10px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  {notification}
                </span>
              )}

            </Flex>

      <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu((prev) => !prev);
                }}
              >
                <FiMoreVertical className="text-gray-400 text-lg" />
              </button>
      

 {showMenu && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="
                    absolute
                    right-7
                    top-0
                    z-20
                    bg-white
                    shadow-lg
                    rounded-lg
                    border
                    border-gray-200
                    overflow-hidden
                  "
                >
                  <button
                    type="button"
                    onClick={handelBlock}
                    className="
                      px-4
                      py-2
                      text-sm
                      text-white
                      bg-red-700
                      font-robot
                      whitespace-nowrap
                      hover:bg-red-600
                    "
                  >
                    Block
                  </button>
                </div>
              )}
          </div>

        </div>
      </div>
      </motion.div>

    </div>
  );
};

export default MassageProfile;