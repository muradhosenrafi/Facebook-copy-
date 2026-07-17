import { CgArrowLeft } from "react-icons/cg";
import Container from "../components/Container";
import Infutbox from "../components/Infutbox";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,} from "firebase/auth";
// import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { getDatabase, push, ref, set } from "firebase/database";
// import profile from "../assets/rafi.png"

const SingUp = () => {
 const [loading, setLoading] = useState(false);

const auth = getAuth();
const db = getDatabase();

  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [conformpassword,setConformPassword]=useState("")
  let navigate=useNavigate()

  let [nameError,setNameError]=useState("")
  let [emailError,setEmailError]=useState("")
  let [passwordError,setPasswordError]=useState("")
  let [conformpasswordError,setConformPasswordError]=useState("")

  
  let EmailRejex =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  let LowrCase =/^(?=.*[a-z])/
  let UpperCase =/(?=.*[A-Z])/
  let Digit =/(?=.*\d)/
  let special  =/(?=.*[@$!%*?&])/
  let characters   =/[A-Za-z\d@$!%*?&]{8,}$/

let handleName =(e)=>{
  setName (e.target.value)
  setNameError ("")
}

let handleEmail =(e)=>{
  setEmail (e.target.value)
  setEmailError ("")
}

let handlePassword =(e)=>{
  setPassword (e.target.value)
  setPasswordError ("")
}

let handleConformPassword=(e)=>{
  setConformPassword (e.target.value)
  setConformPasswordError ("")
}



  let handleSingup =()=>{

  setNameError("");
  setEmailError("");
  setPasswordError("");
  setConformPasswordError("");


if (!name) {
  setNameError("Please Enter Your Name");
  return;
}

else if (!email) {
  setEmailError("Please Enter Your Email");
    return;
}
else if (!EmailRejex.test(email)) {
  setEmailError("Please enter a valid Gmail address");
   return;
}
    

else if (!password) {
  setPasswordError("Please Enter Your Password");
    return;
}

if(!LowrCase.test(password)){
  setPasswordError("One Lowercase Letter")
      return;
}
if(!UpperCase.test(password)){
  setPasswordError("One Uppercase Letter")
      return;
}
if(!Digit.test(password)){
  setPasswordError("One Digit (?=.*d)")
      return;
}
if(!special.test(password)){
  setPasswordError("One Special Letter")
      return;
}
if(!characters.test(password)){
  setPasswordError("Password must contain at least 8 characters")
      return;
}


 if (password !== conformpassword){
      setConformPasswordError("Passwords do not match")
         return; 
    }

    // firebase conect


   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
   sendEmailVerification(auth.currentUser)
   
  // console.log(userCredential.user.uid);

//firebase wright data ----
    set(ref(db, 'users/' + userCredential.user.uid ),{
    username: name,
    email: email,
    profile : 'https://i.ibb.co.com/Y796hPPM/1777130735165-Photoroom.png',
  });
  //firebase wright data ----
    toast.success("Account Created Successfully!");
     setName("");
      setEmail("");
      setPassword("");
      setConformPassword("");
      setLoading(true)
       navigate ("/login");

  })
   .catch((error) => {

      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Email already in use!");
          break;

        case "auth/invalid-email":
          toast.error("Invalid Email Address!");
          break;

        case "auth/weak-password":
          toast.error("Password is too weak!");
          break;

      }

    });

  }


  return (
    <section>
    <Container>
            <div className="pt-[61px] pl-[38px]">
           <Link to="/fontpage"><CgArrowLeft className="text-3xl cursor-pointer  hover:scale-110 hover:-translate-x-1  transition-transform duration-300 " /></Link>
             </div>

<div className="flex flex-col justify-center py-[60px] items-center">
    <h3 className="text-2xl font-bold font-robot">
       Sign up with Email
    </h3>
    <p className="text-center pt-4 w-[270px] text-xs font-normal font-monster text-text ">Get chatting with friends and family today by signing up for our chat app!</p>
</div>


           
 
               <Infutbox onChange={handleName} className="pt-[30px]" type="text" text="Your name"/>

               {
                 nameError && 
                 <p className=" mt-2 ml-11 text-red-500  mb-5 font-robot text-xs">{nameError}</p>
               }
               
             <Infutbox onChange={handleEmail} className="mt-10" type="email" text="Your email"/>

             {emailError &&
              <p className=" mt-2 ml-11 text-red-500  mb-5 font-robot text-xs">{emailError}</p>
             }

             <Infutbox onChange={handlePassword} className="mt-10" type="password" text="Password"/>
    
             { passwordError &&
              <p className=" mt-2 ml-11 text-red-500  mb-5 font-robot text-xs">{passwordError}</p>
             }

             <Infutbox onChange={handleConformPassword} className="mt-10" type="password" text="Confirm Password"/>
             {
              conformpasswordError &&
              <p className=" mt-2 ml-11 text-red-500  mb-5 font-robot text-xs">{conformpasswordError}</p>
             }
         

     <div className=" text-center">
     {
  loading ? (
    <Loader/>
  ) : (
          <Button onClick={handleSingup}
             className="pt-[121px] pb-[40px]"
             text={"Create an account"}
             />
  )
}
    
     </div>
    </Container>
</section>

  )
}

export default SingUp

