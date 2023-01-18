import { HashRouter, Routes,Route } from "react-router-dom"; 
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import CoinDetails from './Components/CoinDetails';
import Footer from './Components/Footer';


function App() {
  return (
 <HashRouter>
  <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/coins" element={<Coins/>} />
    <Route path="/Exchanges" element={<Exchanges/>} />
    <Route path="/coin/:id" element={<CoinDetails/>} />
</Routes>
<Footer/>
 </HashRouter>
  );
}

export default App;
