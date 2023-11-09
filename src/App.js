import './App.css';
import { Routes, Route } from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import DefaultPage from './pages/DefaultPage';





function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='*' element={<DefaultPage />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
