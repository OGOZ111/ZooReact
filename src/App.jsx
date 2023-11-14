import "./App.css";
import Header from "./Header";
import CardH from "./CardH";
import { useState } from "react";
import { animals1 } from "./animalsList";
import Footer from "./Footer";

function App() {
  const [animals, setAnimals] = useState(animals1);
  const [search, setSearch] = useState("");

  const removeHandler = (name) => {
    const updatedArray = animals.filter((animal) => animal.name !== name);

    setAnimals(updatedArray);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const likesHandler = (name, action) => {
    const updatedArray = animals.map((animal) => {
      if (animal.name === name) {
        if (action === "add") {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArray);
  };

  return (
    <div>
      <Header />

      <main>
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
      <Footer />
    </div>
  );
}

export default App;
