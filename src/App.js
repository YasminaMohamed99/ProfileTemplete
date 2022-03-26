import logo from './logo.svg';
import './App.css';
import HeroSection from './HeroSection/HeroSection';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Portofolio from './Portofolio/Portofolio';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Portofolio/>
      <Footer/>
    </div>
  );
}

export default App;
