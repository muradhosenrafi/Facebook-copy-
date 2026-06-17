import { useState } from "react";
import toast from "react-hot-toast";



const ForgetPassword = ({ onClose }) => {


    let [email, setEmail]=useState("")
    let [emailError, setEmailError]=useState("")

    let EmailRejex =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

let handleEmail =(e)=>{
    setEmail(e.target.value);
    setEmailError ("")
}

let handleSendbtn =()=>{
if (!email){
    setEmailError("Please enter your email address")
}if(!EmailRejex.test(email)){
setEmailError ("Please enter a valid email address")

}else{
     toast.success('Successfully logged in!');
    onClose();
}

}

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px]">
        <h2 className="text-xl font-bold font-robot text-center">
          Forgot Password
        </h2>

        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter Your Email"
          className="w-full border outline-none text-base font-normal font-robot  border-1 border-text placeholder:text-base placeholder:font-robot  p-3 rounded-lg mt-5"
        />
           {emailError && (
          <p className="mt-2 text-red-500 mb-5 font-robot text-xs">{emailError}</p>
        )}


        <div className="flex gap-3 mt-5">
          <button
            onClick={onClose}
            className="w-full text-base font-semibold  border-1 border-text hover:text-white hover:bg-red-500  cursor-pointer duration-300 font-robot py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
              onClick={handleSendbtn}
            className="w-full bg-blue-500 text-base font-semibold border-text hover:text-white hover:bg-red-500  cursor-pointer duration-300 font-robot  text-white py-3 rounded-lg"
          >
            Send Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;