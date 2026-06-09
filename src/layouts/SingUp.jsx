import { CgArrowLeft } from "react-icons/cg";
import Container from "../components/Container";
import Infutbox from "../components/Infutbox";
import Button from "../components/Button";
import { Link } from "react-router-dom";



const SingUp = () => {
  return (
    <section>
    <Container>
            <div className="pt-[61px] pl-[38px]">
           <Link to="/fontpage"><CgArrowLeft className="text-3xl cursor-pointer" /></Link>
             </div>

<div className="flex flex-col justify-center py-[60px] items-center">
    <h3 className="text-2xl font-bold font-robot">
       Sign up with Email
    </h3>
    <p className="text-center pt-4 w-[270px] text-xs font-normal font-monster text-text ">Get chatting with friends and family today by signing up for our chat app!</p>
</div>


             <Infutbox className="py-[30px]" type="text" text="Your name"/>
             <Infutbox className="" type="email" text="Your email"/>
             <Infutbox className="py-[30px]" type="password" text="Password"/>
             <Infutbox className="" type="password" text="Confirm Password"/>

     <div className=" text-center">
     <Link to="/home"><Button 
             className="pt-[121px] pb-[40px]"
             text="Create an account"
             /></Link>
    
     </div>
    </Container>
</section>

  )
}

export default SingUp

