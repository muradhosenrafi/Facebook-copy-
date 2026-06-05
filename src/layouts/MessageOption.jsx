import MassageProfile from "../components/MassageProfile"
import Container from "../components/Container"
import profile from "../assets/fast.png"
import profile1 from "../assets/group.png"
import profile2 from "../assets/profile3.png"
import profile3 from "../assets/profile2.png"
import profile5 from "../assets/profile1.png"
import profile6 from "../assets/last.png"

const MessageOption = ({className}) => {
  return (
<Container className={`w-full bg-white rounded-t-[40px] z-50 pt-9 ${className}`}>
        <div className=" mt-5">

<MassageProfile 
className="cursor-pointer bg-[#F1F6FA]"
hedname="Alex Linderson"
title="How are you today?"
notification="3"
time="2 min ago"
profilleimg={profile}

/>

<MassageProfile 
className="cursor-pointer bg-[#F1F6FA]"
hedname="Team Align"
title="Don’t miss to attend the meeting."
notification="3"
time="2 min ago"
profilleimg={profile1}

/>

<MassageProfile 
className="cursor-pointer bg-[#F1F6FA]"
hedname="John Ahrahamn"
title="Hey! Can you join the meeting?"
notification="5"
time="2 min ago"
profilleimg={profile2}

/>

<MassageProfile 
className="cursor-pointer bg-[#F1F6FA]"
hedname="Sabila Sayma"
title="How are you today?"
notification="3"
time="2 min ago"
profilleimg={profile3}

/>


<MassageProfile 
className="cursor-pointer bg-[#F1F6FA]"
hedname="John Borino"
title="Have a good day 🌸"
notification="3"
time="2 min ago"
profilleimg={profile5}

/>


<MassageProfile 
className="cursor-pointer bg-[#F1F6FA]"
hedname="Angel Dayna"
title="How are you today?"
notification="3"
time="2 min ago"
profilleimg={profile6}

/>

    </div>
</Container>
  )
}

export default MessageOption