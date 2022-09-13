import './App.css';
import Welcome from './pages/Welcome'
import Cities from './pages/Cities'
import DetailsPage from './pages/DetailsPage'
import NewCity from './pages/NewCity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';
import NotFound from './pages/NotFound'
import EditCity from './pages/EditCity';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/newcity" element={<NewCity />} />
          <Route path="/editcity" element={<EditCity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;