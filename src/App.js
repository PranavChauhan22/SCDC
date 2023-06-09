import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Test from './components/testimonials/Test';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Test/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
