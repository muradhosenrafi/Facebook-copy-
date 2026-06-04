
import Container from '../components/Container'
import SerchNav from '../components/SerchNav'
import Image from "../components/Image"
import profile from "../assets/profile.png"
import Flex from '../components/Flex'

const Nav = () => {
  return (
<nav>
    <Container>
<div className='flex justify-between items-center pt-[61px] px-[24px] pb-[40px] bg-[#000E08]'>
         <SerchNav/>
         <h3 className='font-medium text-2xl font-robot text-[#ffff]'>Home</h3>
         <Image src={profile} alt="profile png"/>
</div>
    

    <Flex className='justify-between relative'>
         <Image className="w-[58px] h-[58px] " src={profile} alt="my pic png"/>
         <Image className="w-[58px] h-[58px]" src={profile} alt="my pic png"/>
         <Image className="w-[58px] h-[58px]" src={profile} alt="my pic png"/>
         <Image className="w-[58px] h-[58px]" src={profile} alt="my pic png"/>
         <Image className="w-[58px] h-[58px]" src={profile} alt="my pic png"/>
    </Flex>

    </Container>
</nav>
  )
}

export default Nav