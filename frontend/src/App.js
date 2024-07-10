import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
