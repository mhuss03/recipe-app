import { useState } from "react";
import NavBar from "./components/navBar";
import RecipeGrid from "./components/recipeGrid";
import SearchBar from "./components/searchBar";

export default function App() {
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setsearchValue] = useState("all");

  const handleClick = (data) => {
    setFilterValue(data);
  };

  const handleChange = (data) => {
    setsearchValue(data);
  };

  return (
    <div className="flex flex-wrap bg-slate-200">
      <div className="flex w-full justify-center bg-primary py-8">
        <img
          className="absolute left-2 h-12 sm:-top-2 sm:left-16 sm:h-28"
          src="./Assets/Logo.PNG"
          alt="logo"
        />
        <SearchBar onChange={handleChange} />
      </div>
      <div className="h-100% mx-auto grid w-3/4 grid-cols-1 sm:mx-0 sm:grid-cols-2 md:grid-cols-3">
        <RecipeGrid id="1" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="2" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="3" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="4" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="5" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="6" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="7" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="8" filter={filterValue} searchFilter={searchValue} />
        <RecipeGrid id="9" filter={filterValue} searchFilter={searchValue} />
      </div>
      <div className="h-96 w-1/4 rounded-3xl bg-white">
        <NavBar onClick={handleClick} />
      </div>
    </div>
  );
}
