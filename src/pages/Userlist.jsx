import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Userlist = () => {
    let navigate=useNavigate()
  let data = useSelector(state=>state.activeuser.value);

  useEffect(()=>{
if(data==null){
  navigate('/')
}


  },[])
  return (
    <div>Userlist</div>
  )
}
