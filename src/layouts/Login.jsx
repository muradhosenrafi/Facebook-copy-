import { CgArrowLeft } from "react-icons/cg";
import Container from "../components/Container";
import Infutbox from "../components/Infutbox"; 
import facebok from "../assets/fac.png";
import google from "../assets/god.png";
import appol from "../assets/whit1.png";
import Image from "../components/Image";
import Button from "../components/Button";
import { Link, useNavigate,} from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import ForgetPassword from "../components/ForgetPassword";
import Loader from "../components/Loader";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
 
  let [showForgetPassword, setShowForgetPassword] = useState(false);
const [loading, setLoading] = useState(false);
  let [email, SetEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate  = useNavigate()
  let EmailRejex =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  // <Firebase conact start>

    const auth = getAuth();

     {/* <Firebase conact end> */}


  let hnadelEmail = (e) => {
    SetEmail(e.target.value); 
    setEmailError("");
  };


  let handelPassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  let handelLogin = () => {

    if (!email) {
      setEmailError("Please enter your email"); 
    
    }else if(!EmailRejex.test(email)){
        setEmailError("Please enter a valid email address")
       
    }if (!password) {
      setPasswordError("Please enter your password");
    
    }if(!email){
         toast.error('Please Enter a Valid Email & Password Address');
    }if (email && password && EmailRejex.test(email)) {
     
 
  //  <Firebase conact start>

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Login Successful");


    setTimeout(()=>{
      setLoading(true);
    },1000);

    setTimeout(()=>{
      navigate ("/home");
    },3000);

  })
  .catch((error) => {
    switch (error.code) {
      case "auth/invalid-credential":
        toast.error("Invalid email or password");
          break;
        case "auth/invalid-email":
        toast.error("Invalid email address");
        break;

      case "auth/user-disabled":
        toast.error("This account has been disabled");
        break;

      default:
        toast.error("Login failed");
      
    }
  });

  
 /* <Firebase conact end> */

    }
  };

  let handelGoogle =()=>{

const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {

toast.success("Login Successful");
setTimeout(() => {
  navigate("/home");
}, 1000);

  }).catch((error) => {
  console.log(error);


  });

    
  }
  return (
    <section>
     
      <Toaster position="top-center" reverseOrder={false} />

      <Container>
        <div className="py-[61px] pl-[38px]">
          <Link to="/fontpage"> 
            <CgArrowLeft className="text-3xl hover:scale-110 hover:-translate-x-1 transition-transform duration-300 cursor-pointer " />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold font-robot">
            Log in to Chatbox
          </h3>
          <p className="text-center pt-4 w-[250px] text-xs font-normal font-monster text-text ">
            Welcome back! Sign in using your social account or email to continue us
          </p>
        </div>

        <div className="gap-5 flex justify-center items-center pt-[30px]">
          <Image className="cursor-pointer" src={facebok} />
          <Image onClick={handelGoogle} className="cursor-pointer" src={google} />
          <Image className="cursor-pointer" src={appol} />
        </div>

        <div className="flex gap-6 py-[30px] justify-center items-center">
          <div className="h-[1px] w-[132px] bg-text"></div> 
          <div className="font-monster text-base text-text ">OR</div> 
          <div className="h-[1px] w-[132px] bg-text"></div>
        </div>


        <Infutbox onChange={hnadelEmail} value={email} className="" type="email" text="Your email" />
        {emailError && (
          <p className="mt-2 ml-11 text-red-500 mb-5 font-robot text-xs">{emailError}</p>
        )}

        <Infutbox onChange={handelPassword} value={password} className="pt-[30px]" type="password" text="Password" />
        {passwordError && (
          <p className="mt-2 ml-11 text-red-500 mb-5 font-robot text-xs">{passwordError}</p>
        )}

        <div className="text-center">
          {
            loading?(
               <Loader />
            ):(
            <Button onClick={handelLogin} className="mt-[170px]" text="Login" />
            )}
          <p   onClick={() => setShowForgetPassword(true)}
          className="text-inptext pt-4 cursor-pointer pb-[40px] font-medium text-base font-robot">Forgot password?</p>
     {
     
        <ForgetPassword
          show={showForgetPassword}
        onClose={()=>setShowForgetPassword(false)}
        />
    
     }
        </div>
      </Container>
    </section>
  );
};

export default Login;