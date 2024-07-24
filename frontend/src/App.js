import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/UpdatePage';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
