import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Github from './Components/Githubb';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
