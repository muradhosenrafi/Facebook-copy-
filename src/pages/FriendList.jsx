import Container from "../components/Container";
import FridenCard from "../components/FridenCard";
import FriendRequestActp from "../components/FriendRequestActp";
import SerchNav from "../components/SerchNav";

import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

export const FriendList = () => {
  const [friendLimit, setFriendLimit] = useState(5);
  const [requestLimit, setRequestLimit] = useState(5);

  const [alluser, setAllUser] = useState([]);

  const data = useSelector((state) => state.activeuser.value);

  const db = getDatabase();

  // ================= Firebase Users =================
  useEffect(() => {
    if (!data?.uid) return;

    const usersRef = ref(db, "users/");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const arr = [];

      snapshot.forEach((item) => {
        // Current logged-in user বাদ
        if (item.key !== data.uid) {
          arr.push({
            id: item.key,
            ...item.val(),
          });
        }
      });

      setAllUser(arr);
    });

    return () => unsubscribe();
  }, [db, data?.uid]);

  console.log("Firebase Users:", alluser);

  // ================= Friend Data =================
  const friendData = alluser;

  // ================= Request Data =================
  const requestData = alluser;

  return (
    <Container className="bg-[#000E08] w-full min-h-screen">

      {/* ================= Header ================= */}
      <div className="relative pt-6 px-5 flex items-center justify-between w-full">

        <SerchNav right="left-[60px] z-50" />

        <h3 className="absolute left-1/2 -translate-x-1/2 font-medium text-2xl font-robot text-white">
          Friends
        </h3>

      </div>

      {/* ================= Friends ================= */}
      <div className="mt-8">

        {friendData
          .slice(0, friendLimit)
          .map((item) => (
            <FridenCard
              key={item.id}
              name={item.username}
              profile={item.profile}
            />
          ))}

        {/* More / Close */}
        {friendData.length > 5 && (
          <div className="flex justify-center mt-5">

            <button
              onClick={() => {
                if (friendLimit >= friendData.length) {
                  setFriendLimit(5);
                } else {
                  setFriendLimit((prev) =>
                    Math.min(prev + 5, friendData.length)
                  );
                }
              }}
              className="
                px-6
                py-2
                bg-white
                text-black
                rounded-lg
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              {friendLimit >= friendData.length ? "Close" : "More"}
            </button>

          </div>
        )}

      </div>

      {/* ================= Request ================= */}
      <div className="mt-10 pb-10">

        <h3 className="flex justify-center font-medium text-2xl font-robot text-white">
          Request
        </h3>

        <div className="mt-5">

          {requestData
            .slice(0, requestLimit)
            .map((item) => (
              <FriendRequestActp
                key={item.id}
                name={item.username}
                profile={item.profile}
              />
            ))}

          {/* More / Close */}
          {requestData.length > 5 && (
            <div className="flex justify-center mt-5">

              <button
                onClick={() => {
                  if (requestLimit >= requestData.length) {
                    setRequestLimit(5);
                  } else {
                    setRequestLimit((prev) =>
                      Math.min(prev + 5, requestData.length)
                    );
                  }
                }}
                className="
                  px-6
                  py-2
                  bg-white
                  text-black
                  rounded-lg
                  font-medium
                  hover:bg-gray-200
                  transition
                "
              >
                {requestLimit >= requestData.length ? "Close" : "More"}
              </button>

            </div>
          )}

        </div>
      </div>

    </Container>
  );
};

export default FriendList;