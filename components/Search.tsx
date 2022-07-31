import React from "react";
import { useMovies } from "../store/movieContext";

const Search = () => {
  const { Search } = useMovies();
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target.value.toLowerCase();
    await Search(lowerCase);
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Search
        </label>
        <input
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700  h-14 leading-tight focus:outline-none focus:shadow-outline"
          id="search_input"
          type="text"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default Search;
