

const FriendCard = ({
  image,
  name,
  mutualFriends,
  primaryText = "Confirm",
  secondaryText = "Delete",
  type = "confirm",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:shadow-md transition-shadow duration-200 flex flex-col w-full">
      {/* Profile Image (1:1 Aspect Ratio) */}
      <div className="relative w-full pt-[100%] bg-gray-200">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          {/* User Name */}
          <h3 className="text-[15px] font-semibold text-[#050505] truncate leading-snug">
            {name}
          </h3>

          {/* Mutual Friends / Followers Text */}
          <p className="text-[13px] text-[#65676b] truncate mt-0.5 min-h-[18px]">
            {mutualFriends || ''}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-1.5 mt-3">
          {/* Primary Button */}
          <button
            onClick={onPrimaryClick}
            className={`w-full py-1.5 rounded-md text-[15px] font-semibold transition-colors active:scale-[0.98] ${
              type === 'confirm'
                ? 'bg-[#1877f2] hover:bg-[#166fe5] text-white'
                : 'bg-[#e7f3ff] hover:bg-[#dbe7f2] text-[#1877f2]'
            }`}
          >
            {primaryText}
          </button>

          {/* Secondary Button */}
          <button
            onClick={onSecondaryClick}
            className="w-full py-1.5 rounded-md text-[15px] font-semibold bg-[#e4e6eb] hover:bg-[#d8dadf] text-[#050505] transition-colors active:scale-[0.98]"
          >
            {secondaryText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;