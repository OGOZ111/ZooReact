import "./App.css";
import { useState } from "react";
import { animals1, birds1 } from "./animalsList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import AnimalFunc from "./routes/Animals";
import BirdFunc from "./routes/Birds";

function App() {
  const [animals, setAnimals] = useState(animals1);
  const [birds, setBirds] = useState(birds1);
  const [search, setSearch] = useState("");

  // ANIMALS //////////////////////////////////////////////////////////////////////////

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

  ////////////////////////////////////////////////////////////////////

  // BIRDS

  const removeHandler2 = (name) => {
    const updatedArray2 = birds.filter((bird) => bird.name !== name);

    setBirds(updatedArray2);
  };

  const likesHandler2 = (name, action) => {
    const updatedArray2 = birds.map((bird) => {
      if (bird.name === name) {
        if (action === "add") {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return { ...bird, likes: bird.likes - 1 };
        }
      } else {
        return bird;
      }
    });
    setBirds(updatedArray2);
  };

  const router = createBrowserRouter([
    // {path: '/auth', element:<Authlayout />, children:[{}], [{}] },

    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/animals",
          element: (
            <AnimalFunc
              search={search}
              likesHandler={likesHandler}
              removeHandler={removeHandler}
              animals={animals}
              searchHandler={searchHandler}
            />
          ),
        },
        {
          path: "/birds",
          element: (
            <BirdFunc
              search={search}
              likesHandler2={likesHandler2}
              removeHandler2={removeHandler2}
              birds={birds}
              searchHandler={searchHandler}
            />
          ),
        },

        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
