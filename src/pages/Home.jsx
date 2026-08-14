import { useSelector } from "react-redux";
import Nav from "../layouts/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import MassageProfile from "../components/MassageProfile";

const Home = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.activeuser.value);

  useEffect(() => {
    if (data == null) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <Container className="h-screen overflow-hidden bg-[#000E08]">

      {/* Fixed Nav */}
      <div className="shrink-0">
        <Nav />
      </div>

      {/* Only MessageProfile will scroll */}
      <div className="h-[calc(100vh-150px)] overflow-y-auto overscroll-contain">
        
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />
        <MassageProfile />

      </div>

    </Container>
  );
};

export default Home;