import { useEffect, useState } from 'react';
import FriendRequestActp from './../components/FriendRequestActp';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import Container from "../components/Container";
import FridenCard from "../components/FridenCard";
import SerchNav from "../components/SerchNav";

export const FriendList = () => {
  const [requestLimit, setRequestLimit] = useState(5);
  const [friendLimit, setFriendLimit] = useState(5);
  const [alluser, setAllUser] = useState([]);
  const [requests, setRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]); 
  const [friendsList, setFriendsList] = useState([]);   

  const data = useSelector((state) => state.activeuser.value);

  const db = getDatabase();

  // ================= Firebase Users =================
  useEffect(() => {
    if (!data?.uid) return;

    const usersRef = ref(db, "users/");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (item.key !== data.uid) {
          arr.push({ id: item.key, ...item.val() });
        }
      });
      setAllUser(arr);
    });

    return () => unsubscribe();
  }, [db, data?.uid]);

  // ================= Friend Requests  =================
  useEffect(() => {
    if (!data?.uid) return;

    const requestRef = ref(db, "friendrequestlist/");

    const unsubscribe = onValue(requestRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        const val = item.val();
        if (val.receiverid === data.uid) {
          arr.push({ id: item.key, ...val });
        }
      });
      setRequests(arr);
    });

    return () => unsubscribe();
  }, [db, data?.uid]);

  // =================  Requests (pending  =================
  useEffect(() => {
    if (!data?.uid) return;

    const requestRef = ref(db, "friendrequestlist/");

    const unsubscribe = onValue(requestRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        const val = item.val();
        if (val.Senderid === data.uid) {
          arr.push(val.receiverid);
        }
      });
      setSentRequests(arr);
    });

    return () => unsubscribe();
  }, [db, data?.uid]);

  // ================= Friends List =================
  useEffect(() => {
    if (!data?.uid) return;

    const friendsRef = ref(db, `friends/${data.uid}`);

    const unsubscribe = onValue(friendsRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.key);
      });
      setFriendsList(arr);
    });

    return () => unsubscribe();
  }, [db, data?.uid]);

  let handeladdnow = (item) => {
    set(push(ref(db, "friendrequestlist/")), {
      SenderName: data.displayName || "Unknown",
      SenderImage: data.photoURL || "",
      Senderid: data.uid,
      ReceiverName: item.username || "Unknown",
      receiverid: item.id,
      ReceverImage: item.profile || "",
    });
  };

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
        {alluser
          .slice(0, friendLimit)
          .map((item) => {
            let status = "none";
            if (friendsList.includes(item.id)) {
              status = "friends";
            } else if (sentRequests.includes(item.id)) {
              status = "pending";
            }

            return (
              <FridenCard
                key={item.id}
                name={item.username}
                profile={item.profile}
                status={status}
                onClickadd={() => handeladdnow(item)}
              />
            );
          })}

        {alluser.length > 5 && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => {
                if (friendLimit >= alluser.length) {
                  setFriendLimit(5);
                } else {
                  setFriendLimit((prev) => Math.min(prev + 5, alluser.length));
                }
              }}
              className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              {friendLimit >= alluser.length ? "Close" : "More"}
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
          {requests
            .slice(0, requestLimit)
            .map((item) => (
              <FriendRequestActp
                key={item.id}
                id={item.id}
                name={item.SenderName}
                profile={item.SenderImage}
                senderid={item.Senderid}
              />
            ))}

          {requests.length > 5 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => {
                  if (requestLimit >= requests.length) {
                    setRequestLimit(5);
                  } else {
                    setRequestLimit((prev) => Math.min(prev + 5, requests.length));
                  }
                }}
                className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                {requestLimit >= requests.length ? "Close" : "More"}
              </button>
            </div>
          )}
        </div>
      </div>

    </Container>
  );
};

export default FriendList;