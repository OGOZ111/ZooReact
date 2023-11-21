import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Zoo Project</h1>

      <nav>
        <ul className="bar">
          <l1>
            <NavLink to="/">Home</NavLink>
          </l1>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
