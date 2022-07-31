import { createContext, useContext, useEffect, useState } from "react";
import {
  MovieContextType,
  MoviesInterface,
} from "../interfaces/movies.interface";
export const MovieContext = createContext<MovieContextType | null>(null);
export const useMovies = () => useContext(MovieContext) as MovieContextType;
import { movies$ } from "../data/movies.js";
interface Props {
  children: React.ReactNode;
}
const MovieProvider: React.FC<Props> = ({ children }) => {
  //global states
  const [Movies, setMovies] = useState<MoviesInterface[]>([]);
  const [page, setPage] = useState<any>(1);
  const [categories, setCategories] = useState<any>([]);

  //Fetch All Data from movies file
  const FetchMovies = async () => {
    await movies$.then((movies) => setMovies(movies));
  };

  //Delete movie
  const DeleteMovie = (id: number) => {
    if (confirm("Are you sure to delete this film?")) {
      setMovies(Movies.filter((m: MoviesInterface) => Number(m.id) !== id));
    }
  };
  //Filter categories
  const FilterMovie = async (category: string[]) => {
    setMovies(Movies.filter((m) => category.includes(m.category)));
  };
  //Search
  const Search = (text: string) => {
    if (categories.length > 0) {
      setMovies(Movies.filter((m) => m.title.toLowerCase().includes(text)));
    } else {
      movies$.then((mv) =>
        setMovies(mv.filter((m: any) => m.title.toLowerCase().includes(text)))
      );
    }
  };

  return (
    <MovieContext.Provider
      value={{
        FetchMovies,
        DeleteMovie,
        FilterMovie,
        Movies,
        categories,
        setCategories,
        Search,
        page,
        setPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
