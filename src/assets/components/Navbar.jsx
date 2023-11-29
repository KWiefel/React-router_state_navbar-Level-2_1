import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Speisekarte</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
      <NavLink to="/opening">Öffnungszeiten</NavLink>
      <NavLink to="/gallery">Gallerie</NavLink>
    </nav>
  );
};

export default Navbar;
