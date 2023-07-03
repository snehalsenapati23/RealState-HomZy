import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/footer/Footer";
function App() {
  return (
    
    <div className="App">
      <div>
        <div className="white-gradient">

        </div>
      <Header />
      <Hero /> 
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted/>
      <Footer />
    </div>
  );
}

export default App;
