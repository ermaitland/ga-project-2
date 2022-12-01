import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MakeupIndex from './components/MakeupIndex';
import LipStick from './components/LipStick';
import NailPaint from './components/NailPaint';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeups" element={<MakeupIndex />} />
        <Route path="/makeups/lipstick" element={<LipStick />} />
        <Route path="/makeups/nailpaint" element={<NailPaint />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
