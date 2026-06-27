import { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = ({ show, onClose }) => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
// const EmailRejex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  // problme----------------------
const handleSendbtn = () => {

sendPasswordResetEmail(auth, email)
  .then((result) => {
   
   if(result==null){
    toast.error("Invalid Cradentaial")
   }
    
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes("auth/too-many-requests")){
      toast.success("email gace")
      console.log(errorCode.includes);
      
    }
    console.log(errorCode);
    console.log();
    
    
  });
};
  // problme----------------------------------
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="bg-white p-6 rounded-xl w-[400px]"
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
          >
            <h2 className="text-xl font-bold font-robot text-center">
              Forgot Password
            </h2>

            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter Your Email"
              className="w-full border outline-none text-base font-normal font-robot border-text p-3 rounded-lg mt-5"
            />

            {emailError && (
              <p className="mt-2 text-red-500 mb-5 font-semibold font-robot text-xs">
                {emailError}
              </p>
            )}

            <div className="flex gap-3 mt-5">
              <button
                onClick={onClose}
                className="w-full text-base cursor-pointer font-semibold font-robot py-3 rounded-lg border border-text hover:bg-red-500 hover:text-white duration-300"
              >
                Cancel
              </button>

              <button
                onClick={handleSendbtn}
                className="w-full py-3 rounded-lg text-base cursor-pointer font-semibold font-robot bg-blue-500 text-white hover:bg-green-500 duration-300"
              >
                Send Link
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ForgetPassword;