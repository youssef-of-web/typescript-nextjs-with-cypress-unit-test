const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    thumbnail: "1.jpg",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    thumbnail: "2.jpg",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    thumbnail: "3.jpg",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    thumbnail: "4.jpg",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    thumbnail: "5.jpg",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Gone Girl",
    category: "Thriller",
    thumbnail: "6.jpg",
    likes: 22,
    dislikes: 12,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    thumbnail: "7.jpg",
    likes: 1233,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    thumbnail: "8.jpg",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    thumbnail: "9.jpg",
    likes: 2,
    dislikes: 1,
  },
];

export const movies$ = new Promise((resolve) =>
  setTimeout(resolve, 100, movies)
);
