const FridenCard = ({ name, profile, onClickadd, status }) => {

  return (
    <div className="pt-2">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg">

        {/* Profile Image */}
        <img
          src={profile}
          alt="friend profile"
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-600"
        />

        {/* Name + Buttons */}
        <div className="flex-1">
          <h2 className="text-white text-base font-semibold">
            {name}
          </h2>

          <div className="flex items-center gap-2 mt-3">

            {status === "friends" ? (
              <span className="px-4 py-1.5 rounded-lg bg-green-700 text-white text-sm font-medium">
                Friends
              </span>
            ) : status === "pending" ? (
              <button
                disabled
                className="px-4 py-1.5 rounded-lg bg-gray-500 text-white text-sm font-medium cursor-not-allowed opacity-70"
              >
                Pending
              </button>
            ) : (
              <button
                onClick={onClickadd}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 
                text-white text-sm font-medium transition duration-200"
              >
                Add Friend
              </button>
            )}

            {status !== "friends" && (
              <button
                className="px-4 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 
                text-white text-sm font-medium transition duration-200"
              >
                Cancel
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default FridenCard;