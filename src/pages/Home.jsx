import { useSelector } from "react-redux";
import Nav from "../layouts/Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import Container from "../components/Container";
import MassageProfile from "../components/MassageProfile";

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.activeuser.value);

  const [alluser, setAllUser] = useState([]);
  const [friendsList, setFriendsList] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    if (data == null) {
      navigate("/");
    }
  }, [data, navigate]);

  // ================= সব ইউজারের তথ্য =================
  useEffect(() => {
    if (!data?.uid) return;

    const usersRef = ref(db, "users/");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push({ id: item.key, ...item.val() });
      });
      setAllUser(arr);
    });

    return () => unsubscribe();
  }, [db, data?.uid]);

  // ================= আমার Friends আইডি লিস্ট =================
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

  // ================= friendsList আইডি দিয়ে ইউজার ডাটা বের করা =================
  const friendUsers = alluser.filter((user) => friendsList.includes(user.id));

  return (
    <Container className="h-screen overflow-hidden bg-[#000E08]">

      {/* Fixed Nav */}
      <div className="shrink-0">
        <Nav />
      </div>

      {/* Only MessageProfile will scroll */}
      <div className="h-[calc(100vh-150px)] overflow-y-auto overscroll-contain">

        {friendUsers.length === 0 && (
          <p className="text-center text-navtext mt-10 font-robot">
            No friends yet
          </p>
        )}

        {friendUsers.map((friend) => (
          <MassageProfile
            key={friend.id}
            hedname={friend.username}
            title="Tap to start chatting"
            profilleimg={friend.profile}
            time=""
            notification={0}
          />
        ))}

      </div>

    </Container>
  );
};

export default Home;