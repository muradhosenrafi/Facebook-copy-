import Container from "../components/Container"
import Image from "../components/Image"
import logo from "../assets/logo.png"
import facebok from "../assets/facebook.png"
import google from "../assets/googl.png"
import appol from "../assets/appol.png"
import Button from "../components/Button"
import {useNavigate} from "react-router-dom"
import Loader from "../components/Loader"
import { useState } from "react";

const FontPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
const handleSignup =()=>{
  setLoading(true);

setTimeout(()=>{

    navigate("/singup");

},1000);
}
const handleLoging =()=>{
  setLoading(true);

setTimeout(()=>{

    navigate("/login");

},1000);
}


  return (
    
  <section className=" bg-secondary">

     <Container className="w-full">
     <div >
    <div className="items-center pt-[60px] justify-center flex">
        <Image className="w-[100px]" src={logo} alt="Logo png"/>
    </div>
    <div className="pt-[50px] justify-center items-center flex flex-col">
      <h1 className="text-[68px] w-[338px] text-[#ffff] font-medium leading-[85px]  font-playwrite ">Connect friends easily <span className="text-[68px] w-[338px] text-[#765599] font-bold leading-[78px] font-playwrite">& </span>quickly</h1>
      <p className=" ml-9 pt-10 font-monster text-base text-text ">Our chat app is the perfect way to stay connected with friends and family.</p>
    </div>

<div className="gap-5 flex justify-center items-center pt-10">
<Image className="cursor-pointer" src={facebok}/>
  <Image className="cursor-pointer" src={google}/>
  <Image className="cursor-pointer" src={appol}/>
</div>

<div className="flex gap-6 pt-10 justify-center items-center">
    <div className="h-[1px] w-[132px] bg-text"></div> <div className="font-monster text-base text-text ">OR</div> <div className="h-[1px] w-[132px] bg-text"></div>
</div>
{
  loading && <Loader/>
}
<Button  onClick={handleSignup} text="Sign up with mail"/>

<div>
    <p className="font-monster gap-2 text-xs py-[40px] justify-center flex font-medium text-text">Existing account?<span onClick={handleLoging} className="font-bold cursor-pointer"> Login</span></p>
</div>
     </div>
    </Container>
  </section>
  )
}

export default FontPage