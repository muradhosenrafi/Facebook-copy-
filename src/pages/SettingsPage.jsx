
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Settings from '../layouts/Settings';

const SettingsPage = () => {
    let navigate=useNavigate()
  let data = useSelector(state=>state.activeuser.value);

  useEffect(()=>{
if(data==null){
  navigate('/')
}


  },[])
  return (
    <div>
      <Settings/>
    </div>
  )
}

export default SettingsPage