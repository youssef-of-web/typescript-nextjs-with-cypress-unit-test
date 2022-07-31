import React from "react";
import { useMovies } from "../store/movieContext";

//interface Props
interface Props {
  category: string;
}
function CheckBox({ category }: Props) {
  const { categories, setCategories } = useMovies();
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategories([...categories, e.target.value]);
  };
  return (
    <div className="flex items-center mb-4">
      <input
        key={category}
        name={category}
        type="checkbox"
        value={category}
        className="default-checkbox w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={onchangeHandler}
      />
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {category}
      </label>
    </div>
  );
}

export default CheckBox;
