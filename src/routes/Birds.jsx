import CardH from "../components/CardH";
import Header from "../components/Header";

function BirdFunc({
  removeHandler2,
  likesHandler2,
  search,
  birds,
  searchHandler,
}) {
  return (
    <main>
      <Header />
      <input
        className="searchbar"
        type="text"
        placeholder="Search Birds"
        onChange={searchHandler}
      />
      <div className="cards">
        {birds
          .filter((bird) =>
            bird.name.toLowerCase().includes(search.toLowerCase())
          )

          .map((bird) => (
            <CardH
              key={bird.name}
              name={bird.name}
              likes={bird.likes}
              click={() => removeHandler2(bird.name)}
              clickplus={() => likesHandler2(bird.name, "add")}
              clickminus={() => likesHandler2(bird.name, "remove")}
            />
          ))}
      </div>
    </main>
  );
}

export default BirdFunc;
