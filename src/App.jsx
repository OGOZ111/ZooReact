import "./App.css";
import { useState } from "react";
import { animals1, birds1 } from "./animalsList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import AnimalFunc from "./routes/Animals";

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
