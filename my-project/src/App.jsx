import "./App.css";
import AboutUsSection from "./Components/About";
import ClientTestimonialsSection from "./Components/Clients";
import ContactSection from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/Hero";
import JourneySection from "./Components/Journey";
import ProjectsSection from "./Components/Projects";
import ServicesSection from "./Components/Services";

function App() {
  return (
    <div className="bg-slate-800">
      <Header />
      <HeroSection />
      <ServicesSection />
      {/* <JourneySection /> */}
      {/* <ClientTestimonialsSection /> */}
      <AboutUsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
