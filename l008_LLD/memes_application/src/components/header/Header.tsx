import { Link } from "react-router-dom";
import "./header.css";

const routes = {
  home: "/",
  about: "/about",
  accordian: "/accordian",
  comments: "/comments",
};

const Header = () => {
  return (
    <header className="header">
      <span className="app-name">Memes</span>
      <div className="header-actions">
        <nav className="nav-items">
          <Link to={routes.home}>Home</Link>
          <Link to={routes.about}>About</Link>
          <Link to={routes.accordian}>Accordian</Link>
          <Link to={routes.comments}>Comments</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
