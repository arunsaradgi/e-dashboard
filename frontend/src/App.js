import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
