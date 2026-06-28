

const Delet = () => {
  return (
    <div>
      <div className="w-[160px] h-[120px] py-2 px-3 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.6)] bg-white">
           <div className="absolute -right-2 top-8 w-4 h-4 bg-white rotate-45"></div>
         <div className="font-semibold text-xl font-robot cursor-pointer bg-red-500 py-2 rounded-xl px-5 text-white">Delete</div>
         <div className="font-semibold mt-3 text-xl cursor-pointer font-robot bg-green-500  py-2 rounded-xl px-5 text-white">Profile</div>
      </div>
    </div>
  )
}

export default Delet