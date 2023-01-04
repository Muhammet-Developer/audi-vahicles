import { Link } from "react-router-dom";
import Logo from "../img/Audi-Logo.png";

function Navbar(){
    return(
        <>
     <nav className="navbar navbar-light bg-light">
            <div className="container">
             <a className="navbar-brand" href="#">
              <Link to="/App"><img src={Logo} className="logo" alt=""/></Link>
             </a>
            </div>
        </nav>
        </>
    )
}
export default Navbar;