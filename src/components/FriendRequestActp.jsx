const FriendRequestActp = ({ name, profile }) => {
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
            border-green-400
            shrink-0
          "
        />

        <div className="flex-1 min-w-0">
          <h2 className="text-white font-medium truncate">
            {name}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            wants to be your friend
          </p>
        </div>

        <div className="flex gap-2">

          <button
            className="
              px-3
              py-2
              bg-blue-600
              text-white
              text-xs
              rounded-lg
            "
          >
            Accept
          </button>

          <button
            className="
              px-3
              py-2
              bg-gray-700
              text-white
              text-xs
              rounded-lg
            "
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default FriendRequestActp;