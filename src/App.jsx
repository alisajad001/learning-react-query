import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CatFact from './components/CatFact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-fact" element={<CatFact />} />
      </Routes>
    </div>
  );
};

export default App;
