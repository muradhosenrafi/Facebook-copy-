
import { useEffect } from 'react';
import Group from '../layouts/Group'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GroupPage = () => {
  
    let navigate=useNavigate()
  let data = useSelector(state=>state.activeuser.value);

  useEffect(()=>{
if(data==null){
  navigate('/')
}


  },[])
  return (
    <div>
        <Group/>
    </div>
  )
}

export default GroupPage