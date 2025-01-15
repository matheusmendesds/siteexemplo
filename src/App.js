import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NoPage from './pages/NoPage';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import foto from './images/bannerSocial.png'
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/Contato" element={<Contato/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
