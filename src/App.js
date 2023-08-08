import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Default} from './components/Default';
import { About } from './components/About';


function App() {
  return (
    <div className="App">
      <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route element={<Default />} />
        </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
