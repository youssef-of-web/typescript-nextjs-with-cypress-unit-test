export interface MoviesInterface {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
}
export type MovieContextType = {
  Movies: MoviesInterface[];
  categories: string[];
  setCategories: any;
  page: any;
  setPage: any;
  FetchMovies: () => void;
  DeleteMovie: (id: number) => void;
  FilterMovie: (id: string[]) => void;
  Search: (text: string) => void;
};
