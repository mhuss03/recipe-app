import { useState, useEffect } from "react";

export default function NavBar({ onClick }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(false);

  function navFilter(i, e) {
    const filterValue = e.target.getAttribute("data-filter");
    setFilter(filterValue);
    setSelected(i);
  }

  const buttonClasses = "border-2 border-gray-500 text-purple-950 font-bold";

  useEffect(() => {
    onClick(filter);
  }, [filter, onClick]);

  return (
    <>
      <ul className="flex h-full w-full flex-col items-center justify-evenly text-lg font-semibold tracking-widest text-gray-500">
        <li className="w-10/12">
          <button
            className={`button ${selected === 0 ? buttonClasses : ""}`}
            onClick={(e) => navFilter(0, e)}
            data-filter="all"
          >
            All
          </button>
        </li>
        <li className="w-10/12">
          <button
            className={`button ${selected === 1 ? buttonClasses : ""}`}
            onClick={(e) => navFilter(1, e)}
            data-filter="starter"
          >
            STARTERS
          </button>
        </li>
        <li className="w-10/12">
          <button
            className={`button ${selected === 2 ? buttonClasses : ""}`}
            onClick={(e) => navFilter(2, e)}
            data-filter="main"
          >
            MAIN COURSES
          </button>
        </li>
        <li className="w-10/12">
          <button
            className={`button ${selected === 3 ? buttonClasses : ""}`}
            onClick={(e) => navFilter(3, e)}
            data-filter="side"
          >
            SIDE DISHES
          </button>
        </li>
        <li className="w-10/12">
          <button
            className={`button ${selected === 4 ? buttonClasses : ""}`}
            onClick={(e) => navFilter(4, e)}
            data-filter="dessert"
          >
            DESSERTS
          </button>
        </li>
      </ul>
    </>
  );
}
