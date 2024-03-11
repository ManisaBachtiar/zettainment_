import NavBar from "./parts/navbar";
import FadeInScroll from "./components/fade-in-scroll";
import CustomCard from "./components/ui/custom-card";
import HeroSection from "./parts/hero-section";
import ContactForm from "./parts/contact";
import Content from "./parts/content";
import AboutUs from "./parts/aboutus";
import Footer from "./parts/footer";

import { ThemeProvider } from "./components/theme-provider";

import mission_image from "./assets/img/mission.svg"
import vision_image from "./assets/img/vision.svg"
import motto_image from "./assets/img/motto.svg"

const App = () => {
  return(
    <ThemeProvider defaultTheme="system" storageKey="theme">

      <NavBar />

      <FadeInScroll>
        <HeroSection />
      </FadeInScroll>

      <div className={`max-w-7xl flex flex-col sm:flex-row w-1/1 mx-auto px-5 lg:px-0 mt-9 justify-center items-center bg-background`}>
        
        <FadeInScroll>
        <CustomCard
          img={vision_image}
          title="Our Vision"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur magna vitae nisl vestibulum, eget aliquam nisi finibus."
          customClass="bg-[#1D1B4F] hover:bg-another text-white"
        />
        </FadeInScroll>

        <FadeInScroll>
          <CustomCard
            img={mission_image}
            title="Our Mission"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur magna vitae nisl vestibulum, eget aliquam nisi finibus."
            customClass="hover:bg-[#1D1B4F] bg-another hover:text-white"
          />
        </FadeInScroll>

        <FadeInScroll>
          <CustomCard
            img={motto_image}
            title="Our Motto"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur magna vitae nisl vestibulum, eget aliquam nisi finibus."
            customClass="hover:bg-[#1D1B4F] bg-another hover:text-white"
          />
        </FadeInScroll>

      </div>

      <FadeInScroll>
        <AboutUs />
      </FadeInScroll>

      <FadeInScroll>
        <div className="bg-another mx-auto text-center mt-9 max-w-7xl">
          <h1 className="font-bold text-4xl pt-16 ">Our Social Media Content</h1>
          <p className="lg:w-1/2 text-center w-[85%] mx-auto mt-5 text-lg">lorem ipsum dolor sit amet uwu hahahah a haha  if u have  lorem ipsum lh a haha  if u have  lorem ipsum lorem ipsum dolor sit amet uwu hahahah a haha  if u haveum</p>
        <Content />
        </div>
      </FadeInScroll>

      <FadeInScroll>
        <ContactForm />
      </FadeInScroll>

      <Footer />
    </ThemeProvider>
  )
}

export default App;