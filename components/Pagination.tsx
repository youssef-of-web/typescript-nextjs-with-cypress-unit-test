import React from "react";
import { useMovies } from "../store/movieContext";

//interface Props
interface Props {
  moviesPerPage: any;
  totalMovies: any;
  paginate: any;
}

const Pagination = ({ moviesPerPage, totalMovies, paginate }: Props) => {
  const pageNumbers = [];
  const { page, setPage } = useMovies();
  
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(page)
  return (
    <nav className="p-4 flex space-x-2">
      <button
        onClick={() => page > 1 ? paginate(page - 1) : ""}
        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      >
        prev
      </button>
      <ul className="space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            <a
              onClick={() => {
                paginate(number);
                setPage(number);
              }}
              href="#"
              className="cursor-pointer"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>{page < Math.ceil(totalMovies / moviesPerPage) ? (paginate(page + 1), setPage(page + 1)) : ""}}
        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      >
        suivant
      </button>
    </nav>
  );
};

export default Pagination;
