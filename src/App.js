import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MakeupIndex from './components/MakeupIndex';
import MakeupShow from './components/MakeupShow';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeups/:id" element={<MakeupShow />} />
        <Route path="/makeups" element={<MakeupIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
