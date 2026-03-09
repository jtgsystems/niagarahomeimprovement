import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
