
import MenuBar from '../layouts/MenuBar'
import MessageOption from '../layouts/MessageOption'
import Nav from '../layouts/Nav'

const Home = () => {
  return (
<div>
       <div>
         <Nav/>
        <MessageOption className="-mt-[620px] relative z-10" />
       </div>
    <MenuBar/>
</div>
  )
}

export default Home