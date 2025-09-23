import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import EventsPage from "./pages/EventsPage";
import Team from "./components/Team";
// import Highlights from './components/Highlights';
// import CTA from './components/CTA';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import Apvcouncil from "./pages/Apvcouncil";
import RegistrationPage from "./pages/RegistrationPage";
import PitchnovaPage from "./pages/PitchnovaPage";
import ContactPage from "./pages/ContactPage";
import Agnelabout from "./components/Agnelabout";
// import ContactCard from "./components/contactcard";
// import ContactCard2 from "./components/1ContactCard";
import WebsitesSlider from "./components/WebsitesSlider";
import Incubatoin from "./components/incubation";
import PitchnovaHighlight from "./components/PitchnovaHighlight";

function Home() {
  return (
    <>
      <Navigation />

      <Hero />
      <PitchnovaHighlight />
      <Agnelabout />
      {/* <ContactCard /> */}

      {/* <ContactCard2 /> */}
      <VisionMission />
      <Team />
      {/* <Highlights /> */}
      {/* <CTA /> */}
      <About />
      <WebsitesSlider />
      <Incubatoin />
      <Footer />
      <ScrollToTop />
    </>
  );
}
// function Home() {
//   return (
//     <>
//       <Apvcouncil />
//     </>
//   );
// }

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/ecell" element={<Ecell />} /> */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/pitch" element={<EventsPage />} />
          <Route path="/events/register" element={<RegistrationPage />} />
          <Route path="/events/pitchnova" element={<PitchnovaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
