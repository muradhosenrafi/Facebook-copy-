import Rafi from "../assets/rafi.png"

const FridenCard = () => {
  return (
  <div className="pt-2">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg">

      {/* Profile Image */}
      <img
        src={Rafi}
        alt="friend profile"
        className="w-14 h-14 rounded-full object-cover border-2 border-gray-600"
      />

      {/* Name + Buttons */}
      <div className="flex-1">
        <h2 className="text-white text-base font-semibold">
          Rafi
        </h2>

        <div className="flex items-center gap-2 mt-3">
          {/* Add Friend */}
          <button
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 
            text-white text-sm font-medium transition duration-200"
          >
            Add Friend
          </button>

          {/* Cancel */}
          <button
            className="px-4 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 
            text-white text-sm font-medium transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>

    </div>
  </div>
  );
};

export default FridenCard;