import face from "../assets/face.png"

const Loader = () => {
  return (
<div>

    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-white">
<div className="h-[50px] mt-4">
                <img
  src={face}
  alt="logo"
  className="w-20 py-6"
/>
      <div className="flex gap-3">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>

        <div
          className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>

        <div
          className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
</div>
    </div>
</div>
  );
};


export default Loader