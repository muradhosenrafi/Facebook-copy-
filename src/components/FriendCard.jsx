import { FaUserPlus } from "react-icons/fa";

const FridenCard = ({ name, profile }) => {
  return (
    <div className="w-full px-5 py-3">

      <div className="w-full bg-[#111A15] rounded-xl p-4 flex items-center gap-4">

        <img
          src={profile}
          alt="profile"
          className="
            w-14
            h-14
            rounded-full
            object-cover
            border-2
            border-amber-400
            shrink-0
          "
        />

        <div className="flex-1 min-w-0">
          <h2 className="text-white font-medium truncate">
            {name}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Friend
          </p>
        </div>

        <button
          className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            shrink-0
            hover:bg-blue-700
            transition
          "
        >
          <FaUserPlus />
        </button>

      </div>

    </div>
  );
};

export default FridenCard;