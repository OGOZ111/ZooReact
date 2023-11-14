import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Zoo Project</h1>

      <nav>
        <ul className="bar">
          <a href="#home">Home</a>
          <a href="#about">Animals</a>
          <a href="#contact">Birds</a>
          <a href="#contact">About</a>
        </ul>
      </nav>

      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Search for animal"
        />
      </div>
    </header>
  );
};

export default Header;
