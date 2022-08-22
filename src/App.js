import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProjectSection from "./Components/ProjectSection";
import WelcomeSection from "./Components/WelcomeSection";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <Header />
      <WelcomeSection />

      <Work />
      <AboutSection />

      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
