import "./App.css";
import vision from "./assets/img/vision.svg";
import mission from "./assets/img/mission.svg";
import motto from "./assets/img/motto.svg";
import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Card from "./components/card";
import AboutUs from "./components/about-us";
import about from "./assets/img/about.svg";
const App = () => {
  return (
    <>
      <div className="flex justify-center">
        <NavBar />
      </div>

      <HeroSection />
      <div className="max-w-7xl flex w-1/1 mx-auto  mt-9 justify-center items-center  bg-[#EFEFEF]">
        <Card
          img={vision}
          title="Our Vision"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur magna vitae nisl vestibulum, eget aliquam nisi finibus."
          customClass="bg-[#1D1B4F] hover:bg-white hover:text-black text-white"
        />

        <Card
          z
          img={mission}
          title="Our Mission"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur magna vitae nisl vestibulum, eget aliquam nisi finibus."
          customClass="hover:bg-[#1D1B4F] bg-white hover:text-white"
        />

        <Card
          img={motto}
          title="Our Motto"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur magna vitae nisl vestibulum, eget aliquam nisi finibus."
          customClass="hover:bg-[#1D1B4F] bg-white hover:text-white"
        />
      </div>
      <AboutUs img={about} />
    </>
  );
};

export default App;
