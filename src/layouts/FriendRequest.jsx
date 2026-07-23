

import FriendCard from '../components/FriendCard';

const FriendRequest = () => {
    const requestsData = [
  { id: 1, name: "Sounak Roy Sounak ...", mutual: "", image: "https://picsum.photos/300/300?random=1" },
  { id: 2, name: "Samir Killar", mutual: "1 mutual friend", image: "https://picsum.photos/300/300?random=2" },
  { id: 3, name: "Ankit Pandey", mutual: "Followed by 4.1K", image: "https://picsum.photos/300/300?random=3" },
  { id: 4, name: "Rajkumar Chauhan", mutual: "2 mutual friends", image: "https://picsum.photos/300/300?random=4" },
];

const suggestionsData = [
  { id: 5, name: "Md Faysal", mutual: "Followed by 751", image: "https://picsum.photos/300/300?random=5" },
  { id: 6, name: "JH JABER", mutual: "1 mutual friend", image: "https://picsum.photos/300/300?random=6" },
  { id: 7, name: "Neyem Uddin", mutual: "3 mutual friends", image: "https://picsum.photos/300/300?random=7" },
];
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Friend Requests Section */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-[#050505]">Friend Requests</h2>
            <button className="text-[#1877f2] font-semibold text-[15px] hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {requestsData.map((user) => (
              <FriendCard
                key={user.id}
                name={user.name}
                mutualFriends={user.mutual}
                image={user.image}
                primaryText="Confirm"
                secondaryText="Delete"
                type="confirm"
                onPrimaryClick={() => alert(`Confirmed ${user.name}`)}
                onSecondaryClick={() => alert(`Deleted ${user.name}`)}
              />
            ))}
          </div>
        </section>

        {/* People You May Know Section */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-[#050505]">People you may know</h2>
            <button className="text-[#1877f2] font-semibold text-[15px] hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {suggestionsData.map((user) => (
              <FriendCard
                key={user.id}
                name={user.name}
                mutualFriends={user.mutual}
                image={user.image}
                primaryText="Add friend"
                secondaryText="Remove"
                type="add"
                onPrimaryClick={() => alert(`Added ${user.name}`)}
                onSecondaryClick={() => alert(`Removed ${user.name}`)}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default FriendRequest