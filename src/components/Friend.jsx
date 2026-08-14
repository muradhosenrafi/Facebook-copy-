const Friend = ({ profile, username, email, id }) => {
  return (
    <div className="px-5 py-3">
      <div className="bg-[#111A15] rounded-xl p-4 flex items-center gap-4">

        <img
          src={profile}
          alt={username}
          className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
        />

        <div className="flex-1 min-w-0">
          <h2 className="text-white font-medium truncate">
            {username}
          </h2>

          <p className="text-gray-400 text-xs mt-1 truncate">
            {email}
          </p>
        </div>

        <button className="px-3 py-2 bg-blue-600 text-white text-xs rounded-lg">
          Add
        </button>

      </div>
    </div>
  );
};

export default Friend;