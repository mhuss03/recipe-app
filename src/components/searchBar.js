export default function SearchBar() {
  return (
    <div className="flex w-60 rounded-full border-2 bg-white p-2 sm:w-96">
      <button className="mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <input
        type="text"
        className="w-full bg-inherit outline-none"
        maxLength={24}
        placeholder="Search Recipes"
      />
    </div>
  );
}
