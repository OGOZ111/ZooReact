import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Will be here </h1>
      <button>
        <Link to="/animals">Animals</Link>
      </button>
      <button>
        <Link to="/birds">Birds</Link>
      </button>
    </>
  );
}

export default Home;
