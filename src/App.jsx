import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import { Shopping } from './pages/Shopping';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductDetails } from './Components/ProductDetails';


function App() {

  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App
