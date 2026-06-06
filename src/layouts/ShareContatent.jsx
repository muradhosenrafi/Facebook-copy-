import Container from "../components/Container"
import ContentCard from "../components/ContentCard"
import { IoCameraOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { CgPoll } from "react-icons/cg";
import { BsCardImage } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



  

const ShareContatent = () => {
  return (
      <section>

    <Container className="bg-white rounded-t-[40px]">
<div className="relative py-[30px] flex items-center justify-center">
  
  <h1 className="text-center text-base font-robot font-medium">Share Content</h1>

  <div className="absolute left-5 cursor-pointer">
    <RxCross2 className="text-2xl"/>
  </div>

</div>

        <ContentCard
         title=""
        hedding="Camera"
        icon={<IoCameraOutline/>}
        
        />
        <ContentCard
         title="Documents"
        hedding="Share your files"
        icon={<IoDocumentsOutline />}
        
        />
        <ContentCard
         title="Share your files"
        hedding="Create a poll"
        icon={<CgPoll />}
        
        />
        <ContentCard
         title="Share photos and videos"
        hedding="Media"
        icon={<BsCardImage />}
        
        />
        <ContentCard
         title="Share your contactst"
        hedding="Contact"
        icon={<FaRegUserCircle />}
        
        />
        <ContentCard
         title="Share your location"
        hedding="Location"
        icon={<IoLocationOutline />}
        />
  </Container>
</section>

  )
}

export default ShareContatent