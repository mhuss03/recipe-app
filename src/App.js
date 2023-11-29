import { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import RecipeGrid from "./components/recipeGrid";
import SearchBar from "./components/searchBar";

export default function App() {
  const [filterValue, setFilterValue] = useState("all");

  const handleClick = (data) => {
    setFilterValue(data);
  };

  return (
    <div className="flex flex-wrap bg-slate-200">
      <div className="flex w-full justify-center bg-primary py-8">
        <img
          className="absolute left-2 h-12 sm:-top-2
           sm:left-16 sm:h-28"
          src="./Assets/Logo.PNG"
          alt="logo"
        />
        <SearchBar />
      </div>
      <div className="mx-auto grid h-full w-3/4 grid-cols-1 sm:mx-0 sm:grid-cols-2 md:grid-cols-3">
        <RecipeGrid id="1" filter={filterValue} />
        <RecipeGrid id="2" filter={filterValue} />
        <RecipeGrid id="3" filter={filterValue} />
        <RecipeGrid id="4" filter={filterValue} />
        <RecipeGrid id="5" filter={filterValue} />
        <RecipeGrid id="6" filter={filterValue} />
        <RecipeGrid id="7" filter={filterValue} />
        <RecipeGrid id="8" filter={filterValue} />
        <RecipeGrid id="9" filter={filterValue} />
      </div>
      <div className="h-96 w-1/4 rounded-3xl bg-white">
        <NavBar onClick={handleClick} />
      </div>
    </div>
  );
}
