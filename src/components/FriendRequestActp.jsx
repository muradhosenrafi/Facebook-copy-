import { getDatabase, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";
import rafi from "../assets/rafi.png";

const FriendRequestActp = ({ id, name, profile, senderid }) => {
  const db = getDatabase();
  const data = useSelector((state) => state.activeuser.value);

  const handleAccept = () => {
    set(ref(db, `friends/${data.uid}/${senderid}`), true);
    set(ref(db, `friends/${senderid}/${data.uid}`), true);
    remove(ref(db, `friendrequestlist/${id}`));
  };

  const handleCancel = () => {
    remove(ref(db, `friendrequestlist/${id}`));
  };

  return (
    <div className="pt-2">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg">
        <img
          src={profile || rafi}
          alt="request profile"
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-600"
        />

        <div className="flex-1">
          <h2 className="text-white text-base font-semibold">{name}</h2>

          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition duration-200"
            >
              Accept
            </button>

            <button
              onClick={handleCancel}
              className="px-4 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestActp;