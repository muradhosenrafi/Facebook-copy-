import Image from "../components/Image"
import Container from "../components/Container"
import splsh from "../assets/chat.png"


const Splash = () => {
  return (
 <div>
     <section>
     <Container className="">
     <div className="flex justify-center items-center pt-60">
       <Image className="" src={splsh} alt=""/>
     </div>
     
     </Container>
     </section>
    </div>
  )
}

export default Splash