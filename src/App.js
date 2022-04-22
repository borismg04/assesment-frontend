import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
