import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryPage } from "./components/CategoryPage";
import { CityPage } from "./components/CityPage";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { SignupPage } from "./components/SignupPage";
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
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/submit-listing" element={<SignupPage />} />
        <Route path="/city/:slug" element={<CityPage />} />
        <Route path="/:slug" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
