import "./App.css";
import Header from "./Header";
import CardH from "./CardH";
import { useState } from "react";
import { animals1 } from "./animalsList";

function App() {
  const [animals, setAnimals] = useState([animals1]);

  return (
    <div>
      <Header />

      <main>
        <div className="cards">
          {animals1.map((animal) => (
            <CardH key={animal.name} name={animal.name} likes={animal.likes} />
          ))}
        </div>
      </main>

      <footer>Copyright</footer>
    </div>
  );
}

export default App;
