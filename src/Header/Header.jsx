import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import './Header.css';
import '../styles/fonts.css';
import { Link } from "react-router-dom";
import Logout from '../LoginPage/Logout.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { UserContext } from "../Context/userContext.jsx"
import { useContext } from "react"

function Header() {
  const {user}=useContext(UserContext);
  console.log(user);
  return (
    <>
    <header>
      <div className="navbar-top">
        <div className="logo">
          <Link to="/"><h3>FURNISHURE</h3></Link>
        </div>
        <SearchBar/>
        <div className="icons">
      {user ? (
        <>
          <Logout />
          <Link to="/cart">
            <LuShoppingCart size="1.5em" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <span>Login</span>
          </Link>
          <span> | </span>
          <Link to="/register">
            <span>Register</span>
          </Link>
        </>
      )}
    </div>
      </div>
    </header>
    <nav>
      <ul className="bar">
        <li>
          <Link to="/Chairs">Chair</Link>
        </li>
        <li>
          <Link to="/Sofas">Sofas</Link>
        </li>
        <li>
        <Link to="/Beds">Bed</Link>
        </li>
        <li>
        <Link to="/Wardrobes">Wardrobe</Link>
        </li>
        <li>
        <Link to="/Lamps">Lamps & Lighting</Link>
        </li>
        <li>
        <Link to="/Dinings">Dining Set</Link>
        </li>
      </ul>
    </nav>
  </>  
    
  );
}

export default Header;