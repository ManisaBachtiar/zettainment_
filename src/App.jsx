// import "./App.css";
// import Navbar from "./Components/Navbar";
// import HeroSection from "./Components/section";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//     </>
//   );
// }

import "./App.css";

import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section"; // check errornya apa disitu td. 

const App = () => {
  return (
    <>
      <NavBar /> 
      <HeroSection />
    </>
  );
}

export default App; // LOL forgot to include this one :V

// import img1 from "./assets/img/img1.jpg"

// const App = () => {
//   return (
//     <>
//       <h1>test</h1>
//       <img src={ img1 } />
//     </>
//   )
// }

// export default App;