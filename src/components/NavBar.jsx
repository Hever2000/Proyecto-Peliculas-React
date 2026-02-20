import { Link } from "react-router";
import "../css/Navbar.css";
import logo from "../assets/images/logo.png";

function NavBar(){
  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="MovieApp Logo" className="navbar-logo" />
        <Link to="/">MovieApp</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar;