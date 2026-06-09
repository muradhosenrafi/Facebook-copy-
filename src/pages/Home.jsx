 import MenuBar from '../layouts/MenuBar'
// import ShareContatent from '../layouts/ShareContatent'
import MessageOption from '../layouts/MessageOption'
import Nav from '../layouts/Nav'


// import Group from "../layouts/Group"
// import Settings from '../layouts/Settings';
// import MenuBar from './../layouts/MenuBar';



const Home = () => {
  return (
<div>
       <div>
         <Nav/>
        <MessageOption className="-mt-[620px] relative z-10" />
      
       <MenuBar />
       </div> 
{/* 
      <ShareContatent/> 
{/* <Group/> */}
  {/* <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
       
        <Settings/>
      </div>
       <div className="sticky top-0 z-50">
      </div>
</div> */}
</div>
  )
} 

export default Home