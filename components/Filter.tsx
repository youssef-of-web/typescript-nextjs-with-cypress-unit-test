import { FilterIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import CheckBox from "./CheckBox";
import { useMovies } from "../store/movieContext";
import Search from "./Search";
import { MoviesInterface } from "../interfaces/movies.interface";

//interface props
interface Props {
  data: MoviesInterface[];
}

const Filter = ({ data }: Props) => {
  const [show, setShow] = useState(false);
  const { categories, FilterMovie, FetchMovies } = useMovies();
  const uniqueCategory = Array.from(new Set(data.map((m) => m.category)));

  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="relative filter w-40  mt-6">
        <FilterIcon
          id="filter"
          width={60}
          className={classnames("cursor-pointer", {
            "text-blue-400": show,
          })}
          onClick={() => setShow(!show)}
        />
        <div style={{ display: show ? "block" : "none" }} className="p-4">
          {uniqueCategory.map((category) => (
            <CheckBox category={category} />
          ))}
          <div className="flex  w-40 p-y mb-3 space-x-2">
            <button
              id="start-filter"
              className=" p-2 rounded-sm bg-blue-400"
              onClick={(e) =>
                categories.length > 0
                  ? FilterMovie(Array.from(new Set(categories.map((c) => c))))
                  : ""
              }
            >
              Filter
            </button>
            <button
              className="p-2 rounded-sm border-blue-50 bg-red-400"
              onClick={(e) => FetchMovies()}
            >
              Reset filter
            </button>
          </div>
        </div>
      </div>
      {/* Search bloc */}
      <div className="w-full">
        <Search />
      </div>
      <div>
        <span>
          Total film (<span className="font-bold" id="total-films">{data.length}</span>)
        </span>
      </div>
    </div>
  );
};

export default Filter;
