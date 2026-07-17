
// import ShareContatent from '../layouts/ShareContatent'

import { useSelector } from 'react-redux'
import Nav from '../layouts/Nav'
import { useEffect } from 'react';


// import Group from "../layouts/Group"
// import Settings from '../layouts/Settings';
// import MenuBar from './../layouts/MenuBar';
import {  useNavigate } from 'react-router-dom';



const Home = () => {
  let Navigate=useNavigate()
  let data = useSelector(state=>state.activeuser.value);

  useEffect(()=>{
if(data==null){
  Navigate('/')
}


  },[])
  return (
      <div>
         <Nav/>
       </div> 

  )
} 

export default Home