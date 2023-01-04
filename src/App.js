import './App.css';
import Logo from "./Component/img/Audi-Logo.png";
import Logo1 from "./Component/img/RSetronGT_anasayfa.png";
import Avantimg from "./Component/img/avant.png";
import Sedanimg from "./Component/img/sedan.png";
import Cabrioimg from "./Component/img/cabriolet.png";
import Sportimg from "./Component/img/Sportback.png";
import Avant from "./Component/pages/Avant";
import Sedan from "./Component/pages/sedan";
import Cabrio from "./Component/pages/cabriolet";
import Sport from "./Component/pages/Sportback";
import "./Component/header/Header.css"
import {Link,Routes,Route} from "react-router-dom"
import Navbar from './Component/navbar/Navbar';
function App() {
  return (
    <>
    <div className="App">
  <Navbar/>
    </div>
    <div className="resim">
            <img className="img1" src={Logo1} alt="" /> 
            <h3>Vehicle Type</h3>
             <hr/>
            </div>
        <div className="car">
          <div className="imgContainer1">
            <Link to="/Sedan"><img src={Sedanimg} className="arçlr" id='sedan' alt="Sedan"/></Link>
            <p> Sedan</p>
          </div>
          <div className="imgContainer1">
          <Link to="/Avant"><img src={Avantimg} className="arçlr" alt="Avant" /></Link>
          <p>Avant</p>
          </div>
          <div className="imgContainer1">
          <Link to="/Cabrio"> <img src={Cabrioimg} className="arçlr" alt="Cabrio" /></Link>
          <p>Cabrio</p>
          </div>
          <div className="imgContainer1">
          <Link to="/Sport"><img src={Sportimg} className="arçlr" alt="Sport" /></Link>
          <p>Sport</p>
          </div>
          <hr />
        </div>
      <Routes>
        <Route path='/Sedan' element={<Sedan/>}></Route>
        <Route path='/Avant' element={<Avant/>}></Route>
        <Route path='/Cabrio' element={<Cabrio/>}></Route>
        <Route path='/Sport' element={<Sport/>}></Route>
      </Routes>
    </>
  );
}

export default App;


