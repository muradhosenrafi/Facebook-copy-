import { useEffect, useState } from "react";
import Container from "../components/Container";
import { CgArrowLeft } from "react-icons/cg";
import Flex from "../components/Flex";
import GroupButoon from "../components/GroupButoon";
import GroupCard from "../components/GroupCard";
import Profile from "../components/Profile";
import { FaPlus } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import Button from "../components/Button";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue, push, set } from "firebase/database";

const Group = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.activeuser.value);
  const db = getDatabase();

  const [groupName, setGroupName] = useState("Make Group for Team Work");
  const [groupType, setGroupType] = useState("Group work");
  const [friendsData, setFriendsData] = useState([]);
  const [friendIds, setFriendIds] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [creating, setCreating] = useState(false);
  const [memberLimit, setMemberLimit] = useState(5);

  // ================= সব users আনা =================
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
      setFriendsData(arr);
    });
    return () => unsubscribe();
  }, [db, data?.uid]);

  // ================= শুধু friends আনা (friends/{uid}) =================
  useEffect(() => {
    if (!data?.uid) return;
    const friendsRef = ref(db, `friends/${data.uid}`);
    const unsubscribe = onValue(friendsRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => arr.push(item.key));
      setFriendIds(arr);
    });
    return () => unsubscribe();
  }, [db, data?.uid]);

  // friendIds আর users মিলিয়ে actual friend list বানানো
  const actualFriends = friendsData.filter((u) => friendIds.includes(u.id));

  // ================= Member select/unselect =================
  const toggleMember = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // ================= Group Create =================
  const handleCreateGroup = () => {
    if (!data?.uid) return;
    if (!groupName.trim()) {
      alert("গ্রুপের নাম দিন");
      return;
    }
    if (selectedMembers.length === 0) {
      alert("গ্রুপে অন্তত একজন মেম্বার সিলেক্ট করুন");
      return;
    }

    setCreating(true);

    const membersObj = {};
    selectedMembers.forEach((id) => {
      const u = actualFriends.find((f) => f.id === id);
      membersObj[id] = {
        name: u?.username || "Unknown",
        profile: u?.profile || "",
      };
    });
    // Admin কেও member হিসেবে রাখা
    membersObj[data.uid] = {
      name: data.displayName || "Unknown",
      profile: data.photoURL || "",
    };

    const newGroupRef = push(ref(db, "groups/"));

    set(newGroupRef, {
      groupName,
      groupType,
      adminId: data.uid,
      adminName: data.displayName || "Unknown",
      adminImage: data.photoURL || "",
      members: membersObj,
      createdAt: Date.now(),
    })
      .then(() => {
        setCreating(false);
        navigate(-1); // group তৈরি হওয়ার পর আগের পেজে ফিরে যাবে
      })
      .catch((err) => {
        setCreating(false);
        console.error(err);
      });
  };

  return (
    <section>
      <Container className=" ">
        <div className="px-5">
          <div className="relative flex items-center justify-center pt-[61px]">
            <div className="absolute left-[0px]">
              <CgArrowLeft
                onClick={() => navigate(-1)}
                className="text-3xl hover:scale-110 hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <h1 className="text-center font-robot text-base font-medium">
              Create Group
            </h1>
          </div>

          <div>
            <p className="font-medium text-base font-robot text-navtext pt-[30px]">
              Group Description
            </p>
            <input
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Group name লিখুন"
              className="text-[40px] font-bold font-monster text-[#20A090] py-[20px] w-[320px] bg-transparent outline-none"
            />
          </div>

          <Flex className="gap-3 ">
            <GroupButoon
              text="Group work"
              onClick={() => setGroupType("Group work")}
            />
            <GroupButoon
              className="!w-[147px]"
              text="Team  relationship"
              onClick={() => setGroupType("Team relationship")}
            />
          </Flex>

          <p className="font-medium text-base py-[30px] font-robot text-navtext">
            Group Admin
          </p>

          <GroupCard
            name={data?.displayName}
            profile={data?.photoURL}
          />

          <p className="font-medium text-base font-robot py-[25px] text-navtext">
            Invited Members ({selectedMembers.length} selected)
          </p>

          <div className="grid grid-cols-4 gap-5 place-items-center">
            {actualFriends.slice(0, memberLimit).map((friend) => {
              const isSelected = selectedMembers.includes(friend.id);
              return (
                <div
                  key={friend.id}
                  onClick={() => toggleMember(friend.id)}
                  className="relative cursor-pointer"
                >
                  <Profile
                    profilleimg={friend.profile}
                    className={`!w-[70px] !h-[70px] ${
                      isSelected ? "ring-4 ring-[#20A090]" : ""
                    }`}
                  />
                  {isSelected && (
                    <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#20A090] flex items-center justify-center border-2 border-white">
                      <MdCheck className="text-white text-sm" />
                    </span>
                  )}
                </div>
              );
            })}

            {actualFriends.length === 0 && (
              <p className="col-span-4 text-navtext text-sm font-robot">
                এখনো কোনো ফ্রেন্ড নেই
              </p>
            )}

            <div
              onClick={() => navigate("/friendlist")}
              className="w-[70px] h-[70px] cursor-pointer rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center"
            >
              <FaPlus className="text-gray-400 text-xl" />
            </div>
          </div>

          {actualFriends.length > 5 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => {
                  if (memberLimit >= actualFriends.length) {
                    setMemberLimit(5);
                  } else {
                    setMemberLimit((prev) =>
                      Math.min(prev + 5, actualFriends.length)
                    );
                  }
                }}
                className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                {memberLimit >= actualFriends.length ? "Close" : "More"}
              </button>
            </div>
          )}

          <Button
            onClick={handleCreateGroup}
            className="pt-[86px] pb-[30px]"
            classNameone="!w-[410px] !bg-inptext"
            classNametow="!text-white "
            text={creating ? "Creating..." : "Create"}
          />
        </div>
      </Container>
    </section>
  );
};

export default Group;