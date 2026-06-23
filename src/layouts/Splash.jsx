
import Container from "../components/Container"

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
 const timer = setTimeout(() => {
  navigate("/fontpage");
  },2000)
 return () => clearTimeout(timer);
  }, [navigate]);

  return (
 <div>
     <section>
     <Container className="">

     <div className="w-[200px] h-[800px] justify-center items-center flex">
   <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">

  <defs>
    {/* <!-- C Shape --> */}
    <mask id="maskC">
      <rect width="220" height="220" fill="black"/>
      <path
        d="M170 45
        A70 70 0 1 0 170 175"
        stroke="white"
        stroke-width="28"
        stroke-linecap="round"
        fill="none"/>
    </mask>

    {/* <!-- Water Gradient --> */}
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#67E8F9"/>
      <stop offset="100%" stop-color="#0891B2"/>
    </linearGradient>
  </defs>

  {/* <!-- Outline --> */}
  <path
    d="M170 45
    A70 70 0 1 0 170 175"
    stroke="#0F766E"
    stroke-width="28"
    stroke-linecap="round"
    fill="none"/>

  {/* <!-- Water --> */}
  <g mask="url(#maskC)">
    <rect id="fill"
      x="0"
      y="220"
      width="220"
      height="220"
      fill="url(#water)">
      <animate
        attributeName="y"
        from="220"
        to="0"
        dur="3s"
        fill="freeze"/>
    </rect>

    {/* <!-- Wave --> */}
    <path id="wave"
      d="M0 110
         Q25 100 50 110
         T100 110
         T150 110
         T220 110
         V220
         H0Z"
      fill="#38BDF8">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="-30 0;30 0;-30 0"
        dur="2s"
        repeatCount="indefinite"/>
    </path>
  </g>

</svg>
     </div>
     </Container>
     </section>
    </div>
  )
}

export default Splash