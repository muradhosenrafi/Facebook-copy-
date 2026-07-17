import { CgArrowLeft } from "react-icons/cg"
import Container from "../components/Container"
import SerchNav from "../components/SerchNav"
import NotificationCard from "../components/NotificationCard"
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const Notifications = () => {
   let navigate=useNavigate()
  let data = useSelector(state=>state.activeuser.value);

  useEffect(()=>{
if(data==null){
  navigate('/')
}


  },[])


  return (
    <section>
        <Container>
          
                         
              <div className="flex justify-between items-center mt-[52px] mb-[30px]">
             <div className="flex gap-3">
                   <CgArrowLeft className="text-3xl hover:scale-110 hover:-translate-x-1  transition-transform duration-300 cursor-pointer text-black" />
                  <h1 className="text-center font-robot text-[20px] font-medium text-black">Notifications</h1>
             </div>
             <SerchNav className="!text-black" right="right-[60px] !bg-white !text-black"/>
              </div>
            <NotificationCard icon={<IoChatboxEllipses className="text-white text-lg" />}/>

            <NotificationCard icon={<FaUserGroup className="text-white text-lg" />}/>
            <NotificationCard icon={<FaUserGroup className="text-white text-lg" />}/>
            <NotificationCard icon={<FaUserGroup className="text-white text-lg" />}/>
            <NotificationCard icon={<FaUserGroup className="text-white text-lg" />}/>
            <NotificationCard icon={<FaUserGroup className="text-white text-lg" />}/>
        </Container>
    </section>
  )
}

export default Notifications