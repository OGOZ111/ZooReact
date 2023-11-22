import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="containerbar">
        <header>
          <NavLink to="/">
            <h1>Zoo Project</h1>
          </NavLink>
        </header>

        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" activeClassName="selected">
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/birds" activeClassName="selected">
                Birds
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
