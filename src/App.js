import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MakeupIndex from './components/MakeupIndex';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeups" element={<MakeupIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
