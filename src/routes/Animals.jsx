import CardH from "../components/CardH";
import Header from "../components/Header";

function AnimalFunc({
  removeHandler,
  likesHandler,
  search,
  animals,
  searchHandler,
}) {
  return (
    <main>
      <Header />
      <input
        className="searchbar"
        type="text"
        placeholder="Search for animal"
        onChange={searchHandler}
      />
      <div className="cards">
        {animals
          .filter((animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase())
          )

          .map((animal) => (
            <CardH
              key={animal.name}
              name={animal.name}
              likes={animal.likes}
              click={() => removeHandler(animal.name)}
              clickplus={() => likesHandler(animal.name, "add")}
              clickminus={() => likesHandler(animal.name, "remove")}
            />
          ))}
      </div>
    </main>
  );
}

export default AnimalFunc;
