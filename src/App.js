import './App.css';

import { Routes, Route } from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Home } from './pages/HomePage';
import { Default } from './pages/DefaultPage';
import { About } from './pages/AboutPage';
import { Footer } from './components/Footer';
import { Contact } from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='*' element={<Default />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </>
    </div>
  );
}

export default App;
