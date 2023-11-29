import { useState, useEffect } from "react";

export default function RecipeGrid({ id, filter, searchFilter }) {
  const [recipeData, setRecipeData] = useState({
    title: "",
    image: "",
    time: "",
    comments: "",
    likes: "",
  });

  useEffect(() => {
    fetch("data/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const recipe = data.recipes[id - 1];
        console.log();
        if (
          (recipe.type === filter || filter === "all") &&
          recipe.title.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
          setRecipeData({
            title: recipe.title,
            image: recipe.image,
            time: recipe.time,
            comments: recipe.comments,
            likes: recipe.likes,
          });
        } else {
          setRecipeData({
            title: "",
            image: "",
            time: "",
            comments: "",
            likes: "",
          });
        }
      });
  }, [id, filter, searchFilter]);

  if (recipeData.title === "") {
    return null;
  }

  return (
    <div className="mx-4 my-8 flex flex-wrap rounded-md bg-white px-6 py-4 shadow-2xl">
      <div className="relative -top-8 mx-auto h-64 rounded-md shadow-2xl">
        <img
          className="h-full w-full rounded-md object-cover"
          src={recipeData.image}
          alt=""
        />
      </div>
      <div>
        <div>
          <h1 className="mb-4 text-xl font-bold">{recipeData.title}</h1>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mb-2 mr-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{recipeData.time}</p>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mr-4">{recipeData.comments}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-5 w-5"
          >
            <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
          </svg>
          <p>{recipeData.likes}</p>
        </div>
      </div>
    </div>
  );
}
