import './App.css';
import Welcome from './pages/Welcome'
import Cities from './pages/Cities'
import Details from './pages/Details'
import NewCity from './pages/NewCity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/newcity" element={<NewCity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;