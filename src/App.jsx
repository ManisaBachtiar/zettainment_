import "./App.css";
import vision from "./assets/img/vision.svg";
import mission from "./assets/img/mission.svg";
import motto from "./assets/img/motto.svg";
import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Card from "./components/card";
import AboutUs from "./components/about-us";
import about from "./assets/img/about.svg";
import Content from "./components/content";
import ContactForm from "./components/contact";
const App = () => {
  ;

  return (
    <>
      <div className="flex justify-center">
        <NavBar />
      </div>

      <HeroSection />
      <div className="max-w-7xl flex flex-col md:flex-row w-1/1 mx-auto px-5 lg:px-0 mt-9 justify-center items-center  bg-[#EFEFEF]">
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
      <div className="bg-white mx-auto text-center mt-9 max-w-7xl">
        <h1 className="font-bold text-4xl pt-16">Our Social Media Content</h1>
        <p className="w-1/2 text-center mx-auto mt-5 text-lg">lorem ipsum dolor sit amet uwu hahahah a haha  if u have  lorem ipsum lh a haha  if u have  lorem ipsum lorem ipsum dolor sit amet uwu hahahah a haha  if u have  lorem ipsum lh a haha  if u have  lorem ipsum</p>
      <Content />
      </div>
      <ContactForm/>
    </>
  );
};

export default App;
