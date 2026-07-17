import Container from "../components/Container";
import SerchNav from "../components/SerchNav";
import Image from "../components/Image";
import Flex from "../components/Flex";
import { FaPlus } from "react-icons/fa";

import profile1 from "../assets/profilemin.png";
// import profile2 from "../assets/profile3.png";
import { useEffect, useState } from "react";

import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Nav = ({ className }) => {
  let data = useSelector((state) => state.activeuser.value);

  ///---firebase Read data -----///
  const db = getDatabase();
  let [alluser, setAllUser] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key!== data.uid) {
          arr.push(item.val());
        }
        // console.log(item.key);
        // console.log(data.uid);
      });
      setAllUser(arr);
    });
  }, []);

  console.log(alluser);

  ///---firebase Read  data -----///

  return (
    <nav>
      <Container className={`bg-[#000E08] w-full min-h-screen   ${className}`}>
        <div className="flex justify-between items-center pt-[61px] px-[24px] pb-[40px] ">
          <SerchNav right="left-[60px]" />
          <h3 className="font-medium text-2xl font-robot text-[#ffff]">Home</h3>
          {/* -----------parsonal profile ---- */}
          {alluser.map((item) => (
            <div className="w-[58px] h-[58px] rounded-full ">
              <Image
                className="rounded-full border-2 border-white"
                src={item.profile}
                alt="profile png"
              />
            </div>
          ))}
        </div>

        <Flex className="justify-start gap-5 px-5 py-10">
          {/* -----------parsonal profile status ---- */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                className="w-[58px] h-[58px] rounded-full border-2 border-white"
                src={profile1}
                alt="my pic png"
              />

              {/* Plus Icon */}
              <div className="absolute bottom-0 right-0 w-[18px] h-[18px] border-1 border-text  cursor-pointer rounded-full bg-white flex items-center justify-center">
                <FaPlus className="text-[10px]" />
              </div>
            </div>
            <p className="text-center font-normal text-xs text-white font-robot mt-[10px] ">
              My status
            </p>
          </div>
          {/* -----------parsonal profile----*/}

          {/* -----------User profile----*/}
          {alluser.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                className="w-[58px] h-[58px] rounded-full border-2 border-amber-400"
                src={item.profile}
                alt="my pic png"
              />
              <p className="text-center font-normal text-xs text-white font-robot mt-[10px] ">
                {item.username}
              </p>
            </div>
          ))}
          {/* -----------User profile----*/}
        </Flex>
      </Container>
    </nav>
  );
};

export default Nav;
