import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CatFact from './components/CatFact';
import DadJokes from './components/DadJokes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-fact" element={<CatFact />} />
        <Route path="/dad-jokes" element={<DadJokes />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
