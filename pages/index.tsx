import type { NextPage } from "next";
import { MoviesInterface } from "../interfaces/movies.interface";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { useMovies } from "../store/movieContext";

const Home: NextPage = () => {
  const { FetchMovies, Movies } = useMovies();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState<number>(6);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const MV = Movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  useEffect(() => {
    FetchMovies();
    console.log("🚀 ~ file: index.tsx ~ line 11 ~ useEffect ~ Movies", Movies);
  }, []);
  return (
    <div className="p-2">
      <Filter data={Movies} />
      <div className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-1">
        {MV.map((Movie: MoviesInterface, index) => (
          <Card
            key={index}
            id={Movie.id}
            title={Movie.title}
            category={Movie.category}
            thumbnail={Movie.thumbnail}
            likes={Movie.likes}
            dislikes={Movie.dislikes}
          />
        ))}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={Movies.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
