import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { CategoryPage } from "./components/CategoryPage";
import { CityPage } from "./components/CityPage";
import "./App.css";

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<CategoryPage />} />
        <Route path="/city/:slug" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
