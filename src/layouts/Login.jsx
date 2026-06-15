import { CgArrowLeft } from "react-icons/cg";
import Container from "../components/Container";
import Infutbox from "../components/Infutbox";
import facebok from "../assets/fac.png"
import google from "../assets/god.png"
import appol from "../assets/whit1.png"
import Image from "../components/Image"
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
<section>
    <Container>
            <div className="py-[61px] pl-[38px]">
            <Link to="/"> <CgArrowLeft className="text-3xl  hover:scale-110 hover:-translate-x-1  transition-transform duration-300  cursor-pointer " /></Link>
             </div>

<div className="flex flex-col justify-center items-center">
    <h3 className="text-2xl font-bold font-robot">
        Log in to Chatbox
    </h3>
    <p className="text-center pt-4 w-[250px] text-xs font-normal font-monster text-text ">Welcome back! Sign in using your social account or email to continue us</p>
</div>

<div className="gap-5 flex justify-center items-center pt-[30px]">
<Image className="cursor-pointer" src={facebok}/>
  <Image className="cursor-pointer" src={google}/>
  <Image className="cursor-pointer" src={appol}/>
</div>

             <div className="flex gap-6 py-[30px] justify-center items-center">
              <div className="h-[1px] w-[132px] bg-text"></div> <div className="font-monster text-base text-text ">OR</div> <div className="h-[1px] w-[132px] bg-text"></div>
           </div>
             <Infutbox className="" type="email" text="Your email"/>
             <Infutbox className="pt-[30px]" type="password" text="Password"/>

     <div className=" text-center">
              <Button 
             className="pt-[170px]"
             text="Login"
             />
             <p className="text-inptext pt-4 cursor-pointer pb-[40px] font-medium text-base font-robot">Forgot password?</p>
     </div>
    </Container>
</section>
  )
}

export default Login