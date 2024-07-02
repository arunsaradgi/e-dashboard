import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/profile' element={<Profile />}/>
        
      </Routes>
    </div>
  );
}

export default App;
