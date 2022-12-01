import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MakeupIndex from './components/MakeupIndex';
import LipStick from './components/LipStick';
import NailPaint from './components/NailPaint';
import Foundation from './components/Foundation';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeups" element={<MakeupIndex />} />
        <Route path="/makeups/lipstick" element={<LipStick />} />
        <Route path="/makeups/nailpaint" element={<NailPaint />} />
        <Route path="/makeups/foundation" element={<Foundation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
