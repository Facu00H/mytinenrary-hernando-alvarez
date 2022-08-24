import './App.css';
import Welcome from './pages/Welcome'
import Cities from './pages/Cities'
import NewCity from './pages/NewCity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/newcity" element={<NewCity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

