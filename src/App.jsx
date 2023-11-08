import "./App.css";
import Header from "./Header";
import CardH from "./CardH";
import { useState } from "react";
import { animals1 } from "./animalsList";
import Footer from "./Footer";

function App() {
  const [animals, setAnimals] = useState(animals1);

  const removeHandler = (name) => {
    const updatedArray = animals.filter((animal) => animal.name !== name);

    setAnimals(updatedArray);
  };

  return (
    <div>
      <Header />

      <main>
        <div className="cards">
          {animals.map((animal) => (
            <CardH
              key={animal.name}
              name={animal.name}
              likes={animal.likes}
              click={() => removeHandler(animal.name)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
