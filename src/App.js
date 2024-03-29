
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { About } from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Skill from './components/Skills';
import Projects from './components/Projects';
import Experiences from './components/Experiences';

function App() {
  return (
      <>
        <Header/>
        <About/>
        <Projects />
        <Skill/>
        <Experiences/>
        <Footer />
      </>
    );
}

export default App;
